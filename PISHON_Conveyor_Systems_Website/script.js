/* =====================================================
   PRELOADER
===================================================== */

const preloader =
    document.getElementById("preloader");

window.addEventListener("load", () => {

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 500);

});


/* =====================================================
   YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


navLinks
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

        });

    });


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        title: "Belt Conveyor Systems",
        category: "MATERIAL FLOW",
        image: "assets/product-01.jpg",
        description:
            "Reliable conveyor systems designed for smooth and efficient material movement.",
        specs: [
            ["Variable", "Drive"],
            ["Heavy", "Load"],
            ["PLC", "Control"]
        ]
    },

    {
        title: "Roller Conveyor Systems",
        category: "MATERIAL HANDLING",
        image: "assets/product-02.jpg",
        description:
            "Industrial roller conveyors designed for controlled movement of products and materials.",
        specs: [
            ["Steel", "Rollers"],
            ["Modular", "Design"],
            ["Variable", "Speed"]
        ]
    },

    {
        title: "Inclined Conveyor Systems",
        category: "VERTICAL FLOW",
        image: "assets/product-03.jpg",
        description:
            "Inclined conveyor solutions designed to move products efficiently between different levels.",
        specs: [
            ["Inclined", "Design"],
            ["High", "Efficiency"],
            ["Custom", "Layout"]
        ]
    },

    {
        title: "Heavy Duty Conveyors",
        category: "HEAVY INDUSTRIAL",
        image: "assets/product-04.jpg",
        description:
            "Heavy-duty conveyor systems engineered for demanding industrial applications and continuous operation.",
        specs: [
            ["Heavy Duty", "Frame"],
            ["Continuous", "Operation"],
            ["Industrial", "Load"]
        ]
    },

    {
        title: "Conveyor Installation",
        category: "SYSTEM INSTALLATION",
        image: "assets/product-05.jpg",
        description:
            "Complete conveyor installation solutions designed around your facility and production workflow.",
        specs: [
            ["Complete", "Installation"],
            ["Custom", "Layout"],
            ["Professional", "Setup"]
        ]
    },

    {
        title: "Vertical Conveyor Elevators",
        category: "VERTICAL AUTOMATION",
        image: "assets/product-06.jpg",
        description:
            "Vertical conveyor elevator systems for efficient movement of products between different levels.",
        specs: [
            ["Vertical", "Lift"],
            ["Compact", "Design"],
            ["Safe", "Operation"]
        ]
    },

    {
        title: "Material Handling Lifts",
        category: "MATERIAL HANDLING",
        image: "assets/product-07.jpg",
        description:
            "Material handling lift systems designed to improve vertical transportation and reduce manual handling.",
        specs: [
            ["Heavy", "Capacity"],
            ["Guided", "Motion"],
            ["Safety", "System"]
        ]
    },

    {
        title: "Industrial Automation Machines",
        category: "SMART AUTOMATION",
        image: "assets/product-08.jpg",
        description:
            "Industrial automation machines designed to reduce repetitive manual operations and improve productivity.",
        specs: [
            ["PLC", "Control"],
            ["Automated", "Cycle"],
            ["Custom", "Build"]
        ]
    },

    {
        title: "Custom Automation Solutions",
        category: "CUSTOM AUTOMATION",
        image: "assets/product-09.jpg",
        description:
            "Customized automation machines developed around your specific product, process and production requirements.",
        specs: [
            ["Custom", "Engineering"],
            ["Smart", "Control"],
            ["Scalable", "System"]
        ]
    },

    {
        title: "Complete Conveyor Automation",
        category: "SYSTEM INTEGRATION",
        image: "assets/product-10.jpg",
        description:
            "Complete integrated conveyor and automation systems designed to connect multiple stages of your operation.",
        specs: [
            ["Complete", "Integration"],
            ["High", "Throughput"],
            ["Scalable", "Design"]
        ]
    }

];


/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";

    card.innerHTML = `

        <div class="product-card-image">

            <img
                src="${product.image}"
                alt="${product.title}"
                loading="lazy"
            >

        </div>


        <div class="product-card-content">

            <span>
                ${product.category}
            </span>

            <h3>
                ${product.title}
            </h3>

            <p>
                ${product.description}
            </p>

            <button>
                View specifications ↗
            </button>

        </div>

    `;


    card.addEventListener("click", () => {

        openProductModal(product);

    });


    return card;

}


/* =====================================================
   CREATE TWO ROWS
===================================================== */

const rowOne =
    document.getElementById("rowOne");

const rowTwo =
    document.getElementById("rowTwo");


/*
   FIRST ROW
   First 5 products
*/

const firstFive =
    products.slice(0, 5);


/*
   SECOND ROW
   Next 5 products
*/

const secondFive =
    products.slice(5, 10);


/* =====================================================
   DUPLICATE EACH ROW
   REQUIRED FOR INFINITE LOOP
===================================================== */

function populateRow(row, productsList) {

    const allProducts =
        [
            ...productsList,
            ...productsList
        ];


    allProducts.forEach(product => {

        row.appendChild(
            createProductCard(product)
        );

    });

}


populateRow(
    rowOne,
    firstFive
);


populateRow(
    rowTwo,
    secondFive
);


/* =====================================================
   MODAL
===================================================== */

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const modalSpecs =
    document.getElementById("modalSpecs");

const modalQuote =
    document.getElementById("modalQuote");


/* =====================================================
   SELECTED PRODUCT
===================================================== */

let selectedProduct = null;


/* =====================================================
   OPEN MODAL
===================================================== */

function openProductModal(product) {

    selectedProduct = product;

    modalImage.src =
        product.image;

    modalImage.alt =
        product.title;

    modalTitle.textContent =
        product.title;

    modalCategory.textContent =
        product.category;

    modalDescription.textContent =
        product.description;


    modalSpecs.innerHTML = "";


    product.specs.forEach(spec => {

        const specBox =
            document.createElement("div");

        specBox.className =
            "modal-spec";


        specBox.innerHTML = `

            <strong>
                ${spec[0]}
            </strong>

            <span>
                ${spec[1]}
            </span>

        `;


        modalSpecs.appendChild(specBox);

    });


    /*
       Native dialog automatically centers
       the modal on the screen.
    */

    productModal.showModal();

}


/* =====================================================
   CLOSE MODAL
===================================================== */

modalClose.addEventListener(
    "click",
    () => {

        productModal.close();

    }
);


/*
   Close when clicking outside
*/

productModal.addEventListener(
    "click",
    event => {

        const rect =
            productModal.getBoundingClientRect();


        const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;


        if (!inside) {

            productModal.close();

        }

    }
);


/* =====================================================
   REQUEST THIS SYSTEM
   AUTO-FILL CONTACT FORM
===================================================== */

modalQuote.addEventListener("click", event => {

    event.preventDefault();

    if (!selectedProduct) return;

    const message =
        document.getElementById("message");


    if (message) {

        message.value =
`PRODUCT ENQUIRY

Product: ${selectedProduct.title}
Category: ${selectedProduct.category}

${selectedProduct.description}

Specifications:
${selectedProduct.specs
    .map(spec => `${spec[0]}: ${spec[1]}`)
    .join("\n")}

I would like to know more about this system, including pricing, customization, installation and service.`;

    }


    productModal.close();


    setTimeout(() => {

        const contact =
            document.getElementById("contact");


        if (contact) {

            contact.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }


        if (message) {

            message.focus();

        }

    }, 150);

});