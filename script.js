console.log("LunaBot conectado");

let carrito = []; // Inicializa el carrito como un arreglo vacío

let idioma = "es"; // Idioma predeterminado: español

function enviarMensaje() {

    let mensaje = document.getElementById("mensaje").value.toLowerCase();

    let respuesta = "";


    // ESPAÑOL
    if (idioma === "es") {

        if (mensaje.includes("precio") || mensaje.includes("costo")) {
            respuesta = "Nuestros productos tienen precios según el diseño y materiales utilizados. Puedes consultar cada pieza en nuestra colección.";
        }

        else if (mensaje.includes("envio") || mensaje.includes("envíos")) {
            respuesta = "Sí, realizamos envíos internacionales mediante procesos de logística segura.";
        }

        else if (mensaje.includes("pago") || mensaje.includes("tarjeta")) {
            respuesta = "Aceptamos diferentes métodos de pago para facilitar tus compras internacionales.";
        }

        else if (mensaje.includes("producto") || mensaje.includes("coleccion")) {
            respuesta = "Contamos con joyería artesanal mexicana como collares, pulseras y aretes.";
        }

        else if (mensaje.includes("hola") || mensaje.includes("buenas")) {
            respuesta = "¡Hola! Soy LunaBot. Estoy aquí para ayudarte.";
        }

        else {
            respuesta = "Puedes preguntarme sobre productos, precios, pagos o envíos.";
        }

    }


    // INGLÉS
    else if (idioma === "en") {

        if (mensaje.includes("price") || mensaje.includes("cost")) {
            respuesta = "Our products have prices according to the design and materials used. You can check each piece in our collection.";
        }

        else if (mensaje.includes("shipping") || mensaje.includes("delivery")) {
            respuesta = "Yes, we offer international shipping through secure logistics processes.";
        }

        else if (mensaje.includes("payment") || mensaje.includes("card")) {
            respuesta = "We accept different payment methods for international purchases.";
        }

        else if (mensaje.includes("product") || mensaje.includes("collection")) {
            respuesta = "We offer Mexican handmade jewelry such as necklaces, bracelets and earrings.";
        }

        else if (mensaje.includes("hello") || mensaje.includes("hi")) {
            respuesta = "Hello! I am LunaBot. I am here to help you.";
        }

        else {
            respuesta = "You can ask me about products, prices, payments or shipping.";
        }

    }


    // FRANCÉS
    else if (idioma === "fr") {

        if (mensaje.includes("prix")) {
            respuesta = "Nos produits ont des prix selon le design et les matériaux utilisés.";
        }

        else if (mensaje.includes("livraison")) {
            respuesta = "Oui, nous réalisons des livraisons internationales avec une logistique sécurisée.";
        }

        else if (mensaje.includes("paiement")) {
            respuesta = "Nous acceptons différents moyens de paiement pour faciliter vos achats.";
        }

        else if (mensaje.includes("produit") || mensaje.includes("collection")) {
            respuesta = "Nous proposons des bijoux artisanaux mexicains comme des colliers, bracelets et boucles d'oreilles.";
        }

        else if (mensaje.includes("bonjour")) {
            respuesta = "Bonjour ! Je suis LunaBot. Je suis là pour vous aider.";
        }

        else {
            respuesta = "Vous pouvez me demander des informations sur les produits, les prix, les paiements ou les livraisons.";
        }

    }


    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<p>Cliente: " + mensaje + "</p>";
    chatbox.innerHTML += "<p>LunaBot: " + respuesta + "</p>";

    document.getElementById("mensaje").value = "";

}
  
function comprarProducto(producto) {

    productoSeleccionado = producto;

    let tarjetaProducto = event.target.closest(".producto");

    let precioTexto = tarjetaProducto.querySelector(".precio").innerHTML;

    let nombreProducto = producto;

    if (idioma === "en") {

        if (producto === "Collar Luna Azteca") {
            nombreProducto = "Aztec Moon Necklace";
        }

        else if (producto === "Pulsera Sol Mexicano") {
            nombreProducto = "Mexican Sun Bracelet";
        }

        else if (producto === "Aretes Talavera") {
            nombreProducto = "Talavera Earrings";

        }
    }

    else if (idioma === "fr") {

        if (producto === "Collar Luna Azteca") {
            nombreProducto = "Collier Lune Aztèque";
        }

        else if (producto === "Pulsera Sol Mexicano") {
            nombreProducto = "Bracelet Soleil Mexicain";
        }

        else if (producto === "Aretes Talavera") {
            nombreProducto = "Boucles d'oreilles Talavera";
        }

    }

    carrito.push({
        nombre: nombreProducto,
        precio: precioTexto
    });

    let mensaje = document.getElementById("mensajeCompra");

    if (idioma === "es") {

        mensaje.innerHTML =
        "✅ Producto seleccionado: " + nombreProducto +
        "<br>Un asesor de Luna Azteca te ayudará con tu compra.";

    }

    else if (idioma === "en") {

        mensaje.innerHTML =
        "✅ Selected product: " + nombreProducto +
        "<br>A Luna Azteca advisor will help you with your purchase.";

    }

    else if (idioma === "fr") {

        mensaje.innerHTML =
        "✅ Produit sélectionné : " + nombreProducto +
        "<br>Un conseiller de Luna Azteca vous aidera avec votre achat.";

    }

    mensaje.style.display = "block";

    setTimeout(function(){
        mensaje.style.display = "none";
    }, 4000);

    mostrarCarrito();

}

function mostrarCarrito(){

    let lista = document.getElementById("listaCarrito");
    let total = document.getElementById("totalCarrito");
    let vacio = document.getElementById("carritoVacio");

    lista.innerHTML = "";

    if(carrito.length === 0){

        vacio.style.display = "block";

        if(idioma === "es"){

            vacio.innerHTML = "Tu carrito está vacío.";
            total.innerHTML = "Total: $0 MXN";

        }

        else if(idioma === "en"){

            vacio.innerHTML = "Your cart is empty.";
            total.innerHTML = "Order total: $0 USD";

        }

        else if(idioma === "fr"){

            vacio.innerHTML = "Votre panier est vide.";
            total.innerHTML = "Montant total : 0 €";

        }

    }

    else{

        vacio.style.display = "none";

        let suma = 0;

        carrito.forEach(function(producto){

            let elemento = document.createElement("li");

            elemento.innerHTML =
            producto.nombre + " - " + producto.precio;

            lista.appendChild(elemento);

            let numero = parseFloat(producto.precio.replace(/[^\d.]/g, ""));

            suma += numero;

        });


        let moneda = "";

        if(carrito[0].precio.includes("USD")){

            moneda = " USD";

        }

        else if(carrito[0].precio.includes("EUR")){

            moneda = " EUR";

        }

        else{

            moneda = " MXN";

        }


        let simbolo = "$";

        if(moneda === " EUR"){

            simbolo = "€";

        }

        if(idioma === "es"){

    total.innerHTML =
    "Total: " + simbolo + suma.toFixed(2) + moneda;

}

else if(idioma === "en"){

    total.innerHTML =
    "Order Total: " + simbolo + suma.toFixed(2) + moneda;

}

else if(idioma === "fr"){

    total.innerHTML =
    "Montant total : " + simbolo + suma.toFixed(2) + moneda;

}

}
}

function cambiarMoneda() {

    let moneda = document.getElementById("currencyMonedaGeneral").value;

    let precios = document.querySelectorAll(".precio");

    precios.forEach(function(precio) {

        let valorMXN = precio.getAttribute("data-precio");

        let nuevoPrecio = 0;
        let simbolo = "";

        if (moneda === "MXN") {
            nuevoPrecio = valorMXN;
            simbolo = "$";
        }

        else if (moneda === "USD") {
            nuevoPrecio = (valorMXN / 18).toFixed(2);
            simbolo = "$";
        }

        else if (moneda === "EUR") {
            nuevoPrecio = (valorMXN / 20).toFixed(2);
            simbolo = "€";
        }

        precio.innerHTML = simbolo + nuevoPrecio + " " + moneda;

    });

}

function cambiarIdioma() {

    idioma = document.getElementById("language").value;

    console.log(idioma);

    if (idioma === "en") {

        document.getElementById("botonEnviar").innerHTML = "Send";

        document.getElementById("mensaje").placeholder = "Write your question";

        document.getElementById("inputNombre").placeholder = "Enter your name";
document.getElementById("inputCorreo").placeholder = "Enter your email";

document.getElementById("botonEnviarMensaje").innerHTML = "Send";

        //MONEDA

document.getElementById("labelMonedaGeneral").innerHTML =
"Currency:";

document.getElementById("labelMonedaGeneral").innerHTML =
"Currency:";

document.getElementById("labelMonedaGeneral").innerHTML =
"Currency:";

        // COMPRAR

        document.getElementById("botoncomprarCollar").innerHTML =
"Buy";

document.getElementById("botoncomprarPulsera").innerHTML =
"Buy";

document.getElementById("botoncomprarAretes").innerHTML =
"Buy";

        // MENU
        document.getElementById("navInicio").innerHTML =
"Home";

document.getElementById("navColeccion").innerHTML =
"Collection";

document.getElementById("navNosotros").innerHTML =
"About Us";

document.getElementById("navExportacion").innerHTML =
"Export";

document.getElementById("navContacto").innerHTML =
"Contact";


        // PORTADA
        document.getElementById("descripcionMarca").innerHTML =
        "Mexican handmade jewelry inspired by our roots.";


        // NOSOTROS
        document.getElementById("tituloNosotros").innerHTML =
        "About Luna Azteca";

        document.getElementById("descripcionNosotros").innerHTML =
        "Luna Azteca is a Mexican handmade jewelry brand inspired by our cultural roots.";

        document.getElementById("tituloMision").innerHTML =
        "Mission";

        document.getElementById("descripcionMision").innerHTML =
        "Create high-quality Mexican handmade pieces, combining tradition and design to reach international customers.";

        document.getElementById("tituloVision").innerHTML =
        "Vision";

        document.getElementById("descripcionVision").innerHTML =
        "Be an internationally recognized brand representing Mexican identity.";


        // COLECCIÓN
        document.getElementById("tituloColeccion").innerHTML =
        "Our Collection";

        document.getElementById("nombreCollar").innerHTML =
        "Aztec Moon Necklace";

        document.getElementById("descripcionCollar").innerHTML =
        "Mexican handmade necklace inspired by Aztec symbols, created with unique details that represent our culture.";

        document.getElementById("materialCollar").innerHTML =
        "Material: Mexican silver and handmade design.";

        document.getElementById("envioCollar").innerHTML =
        "Available for international shipping";


        document.getElementById("nombrePulsera").innerHTML =
        "Mexican Sun Bracelet";

        document.getElementById("descripcionPulsera").innerHTML =
        "Handmade bracelet inspired by traditional Mexican elements with a modern and elegant design.";

        document.getElementById("materialPulsera").innerHTML =
        "Material: Mexican silver and handmade details.";

        document.getElementById("envioPulsera").innerHTML =
        "Available for international shipping";


        document.getElementById("nombreAretes").innerHTML =
        "Talavera Earrings";

        document.getElementById("descripcionAretes").innerHTML =
        "Earrings inspired by the colors and patterns of Mexican Talavera.";

        document.getElementById("materialAretes").innerHTML =
        "Material: Handmade ceramic and silver.";

        document.getElementById("envioAretes").innerHTML =
        "Available for international shipping";

        //CARRITO
        document.getElementById("botonVaciar").innerHTML = "Empty cart";

        document.getElementById("tituloCarrito").innerHTML = "🛒 Shopping cart";


        // METODOS DE PAGO
        document.getElementById("tituloPagos").innerHTML =
        "Payment Methods";

        document.getElementById("descripcionPagos").innerHTML =
        "Shop safely using different international payment options.";

        document.getElementById("pagoTarjeta").innerHTML =
        "Credit or debit card";

        document.getElementById("pagoPayPal").innerHTML =
        "PayPal";

        document.getElementById("pagoTransferencia").innerHTML =
        "International bank transfer";

        // PAGOS

        document.getElementById("tituloSeleccionPago").innerHTML =
        "Select your payment method";

        document.getElementById("botonTarjeta").innerHTML =
        "💳 Credit/debit card";

       document.getElementById("botonPaypal").innerHTML =
       "🅿️ PayPal";

       document.getElementById("botonTransferencia").innerHTML =
       "🏦 International bank transfer";

      document.getElementById("mensajePago").innerHTML =
      "Select a payment method to continue with your purchase.";

      document.getElementById("botonConfirmarCompra").innerHTML =
    "Confirm purchase";



        // ENVÍOS
        document.getElementById("tituloEnvios").innerHTML =
        "International Shipping";

        document.getElementById("descripcionEnvios").innerHTML =
        "We deliver our Mexican handmade jewelry pieces to different parts of the world.";

        document.getElementById("destinoUSA").innerHTML =
        "United States";

        document.getElementById("envioUSA").innerHTML =
        "Estimated delivery: 8 to 14 business days.";

        document.getElementById("destinoFrancia").innerHTML =
        "France";

        document.getElementById("envioFrancia").innerHTML =
        "Estimated delivery: 15 to 20 business days.";

        document.getElementById("destinoMexico").innerHTML =
        "Mexico";

        document.getElementById("envioMexico").innerHTML =
        "Estimated delivery: 7 to 10 business days.";

        // RASTREO

document.getElementById("tituloRastreo").innerHTML =
"Order Tracking";

document.getElementById("descripcionRastreo").innerHTML =
"Check the status of your international order.";

document.getElementById("botonRastrear").innerHTML =
"Track Order";

document.getElementById("numeroPedido").placeholder =
"Enter your order number";

    // OPINIONES DE CLIENTES

document.getElementById("tituloReseñas").innerHTML =
"Customer Reviews";

document.getElementById("reseñaMaria").innerHTML =
"The necklace has a beautiful design and represents Mexican culture very well.";

document.getElementById("reseñaEmily").innerHTML =
"A unique handmade piece, perfect as a gift.";


// CONTACTO

document.getElementById("tituloContacto").innerHTML =
"Contact";

document.getElementById("descripcionContacto").innerHTML =
"Do you have questions about our products or international shipping? Write to us and we will be happy to help.";

document.getElementById("labelNombre").innerHTML =
"Name";

document.getElementById("labelCorreo").innerHTML =
"Email";


// EXPORTACIÓN INTERNACIONAL

document.getElementById("tituloExportacion").innerHTML =
"International Export";

document.getElementById("descripcionExportacion").innerHTML =
"Luna Azteca seeks to bring Mexican handmade jewelry to international markets, connecting our culture with customers from different countries.";

document.getElementById("mercadoFrancia").innerHTML =
"Selected Market: France";

document.getElementById("descripcionFrancia").innerHTML =
"France represents an opportunity for Luna Azteca due to consumer interest in handmade jewelry, exclusive designs and products that reflect culture and history. In addition, e-commerce allows French customers to purchase Mexican pieces from anywhere.";

document.getElementById("tituloProceso").innerHTML =
"Logistics Process";

document.getElementById("descripcionProceso").innerHTML =
"Product selection, safe packaging, export documentation, international transportation and final customer delivery.";


// CHATBOT

document.getElementById("mensajeInicialBot").innerHTML =
"LunaBot: Hello! I am the Luna Azteca assistant. How can I help you?";

// OPINIONES DE CLIENTES

document.getElementById("tituloReseñas").innerHTML =
"Customer Reviews";

document.getElementById("reseñaMaria").innerHTML =
"The necklace has a beautiful design and represents Mexican culture very well.";

document.getElementById("reseñaEmily").innerHTML =
"A unique handmade piece, perfect as a gift.";


// CONTACTO

document.getElementById("tituloContacto").innerHTML =
"Contact";

document.getElementById("descripcionContacto").innerHTML =
"Do you have questions about our products or international shipping? Write to us and we will be happy to help.";

document.getElementById("labelNombre").innerHTML =
"Name";

document.getElementById("labelCorreo").innerHTML =
"Email";


// EXPORTACIÓN INTERNACIONAL

document.getElementById("tituloExportacion").innerHTML =
"International Export";

document.getElementById("descripcionExportacion").innerHTML =
"Luna Azteca seeks to bring Mexican handmade jewelry to international markets, connecting our culture with customers from different countries.";

document.getElementById("mercadoFrancia").innerHTML =
"Selected Market: France";

document.getElementById("descripcionFrancia").innerHTML =
"France represents an opportunity for Luna Azteca due to consumer interest in handmade jewelry, exclusive designs and products that reflect culture and history. In addition, e-commerce allows French customers to purchase Mexican pieces from anywhere.";

document.getElementById("tituloProceso").innerHTML =
"Logistics Process";

document.getElementById("descripcionProceso").innerHTML =
"Product selection, safe packaging, export documentation, international transportation and final customer delivery.";


}

if (idioma === "fr") {

    document.getElementById("botonEnviar").innerHTML = "Envoyer";

    document.getElementById("mensaje").placeholder = "Écrivez votre question";

    document.getElementById("inputNombre").placeholder = "Entrez votre nom";
document.getElementById("inputCorreo").placeholder = "Entrez votre e-mail";

document.getElementById("botonEnviarMensaje").innerHTML = "Envoyer";

    //MONEDA

    document.getElementById("labelMonedaGeneral").innerHTML =
"Devise:";

document.getElementById("labelMonedaGeneral").innerHTML =
"Devise:";

document.getElementById("labelMonedaGeneral").innerHTML =
"Devise:";

    //COMPRAR

    document.getElementById("botoncomprarCollar").innerHTML =
"Acheter";

document.getElementById("botoncomprarPulsera").innerHTML =
"Acheter";

document.getElementById("botoncomprarAretes").innerHTML =
"Acheter";
    
    //MENU
document.getElementById("navInicio").innerHTML =
"Accueil";

document.getElementById("navColeccion").innerHTML =
"Collection";

document.getElementById("navNosotros").innerHTML =
"À propos";

document.getElementById("navExportacion").innerHTML =
"Exportation";

document.getElementById("navContacto").innerHTML =
"Contact";

    // PORTADA

    document.getElementById("descripcionMarca").innerHTML =
    "Bijoux artisanaux mexicains inspirés de nos racines.";


    // SOBRE LUNA AZTECA

    document.getElementById("tituloNosotros").innerHTML =
    "À propos de Luna Azteca";

    document.getElementById("descripcionNosotros").innerHTML =
    "Luna Azteca est une marque mexicaine de bijoux artisanaux inspirée de nos racines culturelles.";

    document.getElementById("tituloMision").innerHTML =
    "Mission";

    document.getElementById("descripcionMision").innerHTML =
    "Créer des pièces artisanales mexicaines de qualité, en combinant tradition et design pour atteindre des clients internationaux.";

    document.getElementById("tituloVision").innerHTML =
    "Vision";

    document.getElementById("descripcionVision").innerHTML =
    "Être une marque reconnue internationalement et représenter l'identité mexicaine.";


    // COLECCIÓN

    document.getElementById("tituloColeccion").innerHTML =
    "Notre Collection";


    document.getElementById("nombreCollar").innerHTML =
    "Collier Lune Aztèque";

    document.getElementById("descripcionCollar").innerHTML =
    "Pièce artisanale mexicaine inspirée des symboles aztèques, créée avec des détails uniques qui représentent notre culture.";
    document.getElementById("materialCollar").innerHTML =
    "Matériau: Argent mexicain et design artisanal.";

    document.getElementById("envioCollar").innerHTML =
    "Disponible pour l'expédition internationale";


    document.getElementById("nombrePulsera").innerHTML =
    "Bracelet Soleil Mexicain";

    document.getElementById("descripcionPulsera").innerHTML =
    "Bracelet artisanal inspiré des éléments traditionnels mexicains avec un design moderne et élégant.";

    document.getElementById("materialPulsera").innerHTML =
    "Matériau : argent mexicain et détails artisanaux.";

    document.getElementById("envioPulsera").innerHTML =
    "Disponible pour l'expédition internationale";


    document.getElementById("nombreAretes").innerHTML =
    "Boucles d'oreilles Talavera";

    document.getElementById("descripcionAretes").innerHTML =
    "Boucles d'oreilles inspirées des couleurs et motifs de la Talavera mexicaine.";

    document.getElementById("materialAretes").innerHTML =
    "Matériau : céramique artisanale et argent.";

    document.getElementById("envioAretes").innerHTML =
    "Disponible pour l'expédition internationale";

    //CARRITO
    document.getElementById("botonVaciar").innerHTML = "Empty cart";

    document.getElementById("tituloCarrito").innerHTML = "🛒 Panier d'achat";


    // MÉTODOS DE PAGO

    document.getElementById("tituloPagos").innerHTML =
    "Méthodes de paiement";

    document.getElementById("descripcionPagos").innerHTML =
    "Achetez en toute sécurité grâce à différentes options de paiement internationales.";

    document.getElementById("pagoTarjeta").innerHTML =
    "Carte de crédit ou de débit";

    document.getElementById("pagoPayPal").innerHTML =
    "PayPal";

    document.getElementById("pagoTransferencia").innerHTML =
    "Virement bancaire international";
    
    document.getElementById("tituloSeleccionPago").innerHTML =
    "Sélectionnez votre mode de paiement";

    document.getElementById("botonTarjeta").innerHTML =
    "💳 Carte de crédit/débit";

    document.getElementById("botonPaypal").innerHTML =
    "🅿️ PayPal";

   document.getElementById("botonTransferencia").innerHTML =
   "🏦 Virement bancaire international";

   document.getElementById("mensajePago").innerHTML =
   "Sélectionnez un mode de paiement pour continuer votre achat.";

   document.getElementById("botonConfirmarCompra").innerHTML =
   "Confirmer l'achat";



    // ENVÍOS

    document.getElementById("tituloEnvios").innerHTML =
    "Expéditions internationales";

    document.getElementById("descripcionEnvios").innerHTML =
    "Nous envoyons nos bijoux artisanaux mexicains dans différentes parties du monde.";

    document.getElementById("destinoUSA").innerHTML =
    "États-Unis";

    document.getElementById("envioUSA").innerHTML =
    "Livraison estimée : 8 à 14 jours ouvrables.";

    document.getElementById("destinoFrancia").innerHTML =
    "France";

    document.getElementById("envioFrancia").innerHTML =
    "Livraison estimée : 15 à 20 jours ouvrables.";

    document.getElementById("destinoMexico").innerHTML =
    "Mexique";

    document.getElementById("envioMexico").innerHTML =
    "Livraison estimée : 7 à 10 jours ouvrables.";

    // RASTREO

document.getElementById("tituloRastreo").innerHTML =
"Suivi de commande";

document.getElementById("descripcionRastreo").innerHTML =
"Consultez l'état de votre commande internationale.";

document.getElementById("botonRastrear").innerHTML =
"Suivre la commande";

document.getElementById("numeroPedido").placeholder =
"Entrez votre numéro de commande";


    // OPINIONES

    document.getElementById("tituloReseñas").innerHTML =
    "Avis de nos clients";

    document.getElementById("reseñaMaria").innerHTML =
    "Le collier possède un design magnifique et représente très bien la culture mexicaine.";

    document.getElementById("reseñaEmily").innerHTML =
    "Une pièce artisanale unique, parfaite pour offrir.";


    // CONTACTO

    document.getElementById("tituloContacto").innerHTML =
    "Contact";

    document.getElementById("descripcionContacto").innerHTML =
    "Vous avez des questions sur nos produits ou nos expéditions internationales ? Écrivez-nous et nous serons heureux de vous aider.";

    document.getElementById("labelNombre").innerHTML =
    "Nom";

    document.getElementById("labelCorreo").innerHTML =
    "Courriel";


    // EXPORTACIÓN

    document.getElementById("tituloExportacion").innerHTML =
    "Exportation internationale";

    document.getElementById("descripcionExportacion").innerHTML =
    "Luna Azteca souhaite proposer la bijouterie artisanale mexicaine aux marchés internationaux, en connectant notre culture avec des clients de différents pays.";

    document.getElementById("mercadoFrancia").innerHTML =
    "Marché sélectionné : France";

    document.getElementById("descripcionFrancia").innerHTML =
    "La France représente une opportunité pour Luna Azteca grâce à l'intérêt des consommateurs pour les bijoux artisanaux, les designs exclusifs et les produits qui reflètent la culture et l'histoire.";

    document.getElementById("tituloProceso").innerHTML =
    "Processus logistique";

    document.getElementById("descripcionProceso").innerHTML =
    "Sélection du produit, emballage sécurisé, documentation d'exportation, transport international et livraison au client final.";


    // CHATBOT

    document.getElementById("mensajeInicialBot").innerHTML =
    "LunaBot : Bonjour ! Je suis l'assistant de Luna Azteca. Comment puis-je vous aider ?";

}


if (idioma === "es") {

    document.getElementById("botonEnviar").innerHTML = "Enviar";

    document.getElementById("mensaje").placeholder = "Escribe tu pregunta";

    document.getElementById("inputNombre").placeholder = "Ingresa tu nombre";
document.getElementById("inputCorreo").placeholder = "Ingresa tu correo electrónico";

document.getElementById("botonEnviarMensaje").innerHTML = "Enviar";

    //MONEDA

    document.getElementById("labelMonedaCollar").innerHTML =
"Moneda:";

document.getElementById("labelMonedaPulsera").innerHTML =
"Moneda:";

document.getElementById("labelMonedaAretes").innerHTML =
"Moneda:";

    //COMPRAR

    document.getElementById("botoncomprarCollar").innerHTML =
"Comprar";

document.getElementById("botoncomprarPulsera").innerHTML =
"Comprar";

document.getElementById("botoncomprarAretes").innerHTML =
"Comprar";

    //MENU

    document.getElementById("navInicio").innerHTML =
"Inicio";

document.getElementById("navColeccion").innerHTML =
"Colección";

document.getElementById("navNosotros").innerHTML =
"Nosotros";

document.getElementById("navExportacion").innerHTML =
"Exportación";

document.getElementById("navContacto").innerHTML =
"Contacto";


    // PORTADA

    document.getElementById("descripcionMarca").innerHTML =
    "Joyería artesanal mexicana inspirada en nuestras raíces.";


    // SOBRE LUNA AZTECA

    document.getElementById("tituloNosotros").innerHTML =
    "Sobre Luna Azteca";

    document.getElementById("descripcionNosotros").innerHTML =
    "Luna Azteca es una marca mexicana de joyería artesanal inspirada en nuestras raíces culturales.";

    document.getElementById("tituloMision").innerHTML =
    "Misión";

    document.getElementById("descripcionMision").innerHTML =
    "Crear piezas artesanales mexicanas de calidad, combinando tradición y diseño para llegar a clientes internacionales.";

    document.getElementById("tituloVision").innerHTML =
    "Visión";

    document.getElementById("descripcionVision").innerHTML =
    "Ser una marca reconocida internacionalmente y representar la identidad mexicana.";


    // COLECCIÓN

    document.getElementById("tituloColeccion").innerHTML =
    "Nuestra colección";


    document.getElementById("nombreCollar").innerHTML =
    "Collar Luna Azteca";

    document.getElementById("descripcionCollar").innerHTML =
    "Pieza artesanal mexicana inspirada en símbolos aztecas, elaborada con detalles únicos que representan nuestra cultura.";

    document.getElementById("materialCollar").innerHTML =
    "Material: Plata mexicana y diseño artesanal.";

    document.getElementById("envioCollar").innerHTML =
    "Disponible para envío internacional";


    document.getElementById("nombrePulsera").innerHTML =
    "Pulsera Sol Mexicano";

    document.getElementById("descripcionPulsera").innerHTML =
    "Pulsera artesanal inspirada en elementos tradicionales mexicanos con un diseño moderno y elegante.";

    document.getElementById("materialPulsera").innerHTML =
    "Material: Plata mexicana y detalles artesanales.";

    document.getElementById("envioPulsera").innerHTML =
    "Disponible para envío internacional";


    document.getElementById("nombreAretes").innerHTML =
    "Aretes Talavera";

    document.getElementById("descripcionAretes").innerHTML =
    "Aretes inspirados en los colores y patrones de la Talavera mexicana.";

    document.getElementById("materialAretes").innerHTML =
    "Material: Cerámica artesanal y plata.";

    document.getElementById("envioAretes").innerHTML =
    "Disponible para envío internacional";

    //CARRITO
    document.getElementById("botonVaciar").innerHTML = "Vaciar carrito";

    document.getElementById("tituloCarrito").innerHTML = "🛒 Carrito de compras";


    // PAGOS

    document.getElementById("tituloPagos").innerHTML =
    "Métodos de pago";

    document.getElementById("descripcionPagos").innerHTML =
    "Compra de forma segura utilizando diferentes opciones de pago internacional.";

    document.getElementById("pagoTarjeta").innerHTML =
    "Tarjeta de crédito o débito";

    document.getElementById("pagoPayPal").innerHTML =
    "PayPal";

    document.getElementById("pagoTransferencia").innerHTML =
    "Transferencia bancaria internacional";
     
    document.getElementById("tituloSeleccionPago").innerHTML =
"Selecciona tu método de pago";

document.getElementById("botonTarjeta").innerHTML =
"💳 Tarjeta de crédito/débito";

document.getElementById("botonPaypal").innerHTML =
"🅿️ PayPal";

document.getElementById("botonTransferencia").innerHTML =
"🏦 Transferencia bancaria internacional";

document.getElementById("mensajePago").innerHTML =
"Selecciona un método de pago para continuar con tu compra.";

document.getElementById("botonConfirmarCompra").innerHTML =
"Confirmar compra";
 
    // ENVÍOS

    document.getElementById("tituloEnvios").innerHTML =
    "Envíos internacionales";

    document.getElementById("descripcionEnvios").innerHTML =
    "Llevamos nuestras piezas artesanales mexicanas a diferentes partes del mundo.";

    document.getElementById("destinoUSA").innerHTML =
    "Estados Unidos";

    document.getElementById("envioUSA").innerHTML =
    "Entrega estimada: 8 a 14 días hábiles.";

    document.getElementById("destinoFrancia").innerHTML =
    "Francia";

    document.getElementById("envioFrancia").innerHTML =
    "Entrega estimada: 15 a 20 días hábiles.";

    document.getElementById("destinoMexico").innerHTML =
    "México";

    document.getElementById("envioMexico").innerHTML =
    "Entrega estimada: 7 a 10 días hábiles.";

    // RASTREO

document.getElementById("tituloRastreo").innerHTML =
"Seguimiento de pedido";

document.getElementById("descripcionRastreo").innerHTML =
"Consulta el estado de tu pedido internacional.";

document.getElementById("botonRastrear").innerHTML =
"Rastrear pedido";

document.getElementById("numeroPedido").placeholder =
"Ingresa tu número de pedido";

    // OPINIONES

    document.getElementById("tituloReseñas").innerHTML =
    "Opiniones de nuestros clientes";

    document.getElementById("reseñaMaria").innerHTML =
    "El collar tiene un diseño hermoso y representa muy bien la cultura mexicana.";

    document.getElementById("reseñaEmily").innerHTML =
    "Una pieza artesanal única, perfecta para regalar.";


    // CONTACTO

    document.getElementById("tituloContacto").innerHTML =
    "Contacto";

    document.getElementById("descripcionContacto").innerHTML =
    "¿Tienes dudas sobre nuestros productos o envíos internacionales? Escríbenos y estaremos encantados de ayudarte.";

    document.getElementById("labelNombre").innerHTML =
    "Nombre";

    document.getElementById("labelCorreo").innerHTML =
    "Correo Electrónico"; 


    // EXPORTACIÓN

    document.getElementById("tituloExportacion").innerHTML =
    "Exportación internacional";

    document.getElementById("descripcionExportacion").innerHTML =
    "Luna Azteca busca llevar la joyería artesanal mexicana a mercados internacionales, conectando nuestra cultura con clientes de diferentes países.";

    document.getElementById("mercadoFrancia").innerHTML =
    "Mercado seleccionado: Francia";

    document.getElementById("descripcionFrancia").innerHTML =
    "Francia representa una oportunidad para Luna Azteca debido al interés de los consumidores por la joyería artesanal, el diseño exclusivo y los productos que reflejan cultura e historia.";

    document.getElementById("tituloProceso").innerHTML =
    "Proceso logístico";

    document.getElementById("descripcionProceso").innerHTML =
    "Selección del producto, embalaje seguro, documentación de exportación, transporte internacional y entrega al cliente final."; 

    // CHATBOT
document.getElementById("mensajeInicialBot").innerHTML =
    "LunaBot: ¡Hola! Soy el asistente de Luna Azteca. ¿En qué puedo ayudarte?";
}

mostrarCarrito();
}



const botonChat = document.getElementById("botonChat");
const chatbot = document.querySelector(".chatbot");

botonChat.addEventListener("click", function() {
    if (chatbot.style.display === "block") {
        chatbot.style.display = "none";
    } else {
        chatbot.style.display = "block";
    }
});

// Todo lo que ya tienes:
// cambio de idioma
// LunaBot
// funciones de botones
// etc.

//METODOS DE PAGO

function seleccionarPago(metodo) {

    let mensaje = "";

    metodoSeleccionado = metodo;

    if (idioma === "es") {

        if (metodo === "tarjeta") {
            mensaje = "Método seleccionado: Tarjeta de crédito o débito ✅";
        }

        else if (metodo === "paypal") {
            mensaje = "Método seleccionado: PayPal ✅";
        }

        else if (metodo === "transferencia") {
            mensaje = "Método seleccionado: Transferencia bancaria internacional ✅";
        }

    }


    else if (idioma === "en") {

        if (metodo === "tarjeta") {
            mensaje = "Selected payment method: Credit or debit card ✅";
        }

        else if (metodo === "paypal") {
            mensaje = "Selected payment method: PayPal ✅";
        }

        else if (metodo === "transferencia") {
            mensaje = "Selected payment method: International bank transfer ✅";
        }

    }


    else if (idioma === "fr") {

        if (metodo === "tarjeta") {
            mensaje = "Méthode sélectionnée : Carte de crédit ou de débit ✅";
        }

        else if (metodo === "paypal") {
            mensaje = "Méthode sélectionnée : PayPal ✅";
        }

        else if (metodo === "transferencia") {
            mensaje = "Méthode sélectionnée : Virement bancaire international ✅";
        }

    }


    document.getElementById("mensajePago").innerHTML = mensaje;

}

function rastrearPedido(){

let pedido = document.getElementById("numeroPedido").value;

let resultado = document.getElementById("resultadoRastreo");


if (pedido !== "") {

    if (idioma === "es") {

        resultado.innerHTML =
        "📦 Tu pedido está confirmado y en transporte internacional.";

    }

    else if (idioma === "en") {

        resultado.innerHTML =
        "📦 Your order has been confirmed and is in international transit.";

    }

    else if (idioma === "fr") {

        resultado.innerHTML =
        "📦 Votre commande est confirmée et en cours de transport international.";

    }

}

else {

    if (idioma === "es") {

        resultado.innerHTML =
        "Ingresa tu número de pedido para consultar el estado.";

    }

    else if (idioma === "en") {

        resultado.innerHTML =
        "Enter your order number to check the status.";

    }

    else if (idioma === "fr") {

        resultado.innerHTML =
        "Entrez votre numéro de commande pour consulter le statut.";

    }

}

}

function confirmarCompra(){

    let confirmacion = document.getElementById("confirmacionCompra");

    if(carrito.length > 0 && metodoSeleccionado){

        let listaProductos = "";

        carrito.forEach(function(producto){

            listaProductos += 
            "<br>• " + producto.nombre + " - " + producto.precio;

        });


        if(idioma === "es"){

            confirmacion.innerHTML =
            "🎉 Compra simulada realizada correctamente." +
            "<br>Productos:" +
            listaProductos +
            "<br>Tu pedido será preparado para envío internacional.";

        }

        else if(idioma === "en"){

            confirmacion.innerHTML =
            "🎉 Simulated purchase completed successfully." +
            "<br>Products:" +
            listaProductos +
            "<br>Your order will be prepared for international shipping.";

        }

        else if(idioma === "fr"){

            confirmacion.innerHTML =
            "🎉 Achat simulé effectué avec succès." +
            "<br>Produits :" +
            listaProductos +
            "<br>Votre commande sera préparée pour l'expédition internationale.";

        }

    }

    else{

        confirmacion.innerHTML =
        "Selecciona un producto y un método de pago.";

    }
}

    function vaciarCarrito(){
        carrito = [];

        mostrarCarrito();
    }
