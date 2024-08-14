window.addEventListener('scroll', function() {
    // Aktuelle Scroll-Position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Höhe des Viewports
    const viewportHeight = window.innerHeight;
    // Gesamte Scroll-Höhe
    const totalScrollHeight = document.body.scrollHeight - viewportHeight;

    // Berechnung des Scroll-Prozentsatzes (0 bis 1)
    const scrollPercent = scrollTop / totalScrollHeight;

    // Berechnung der Rotationswinkel basierend auf dem Scroll-Prozentsatz
    const maxAngle = 90; // Maximale Rotation in Grad

    // Café dreht sich von 0deg bis maxAngle nach vorne (in den Raum hinein)
    const cafeAngle = scrollPercent * maxAngle;
    // Space dreht sich von einer geneigten Position in den Vordergrund
    const spaceAngle = 60 - (scrollPercent * 60); // Start bei 60° und dreht bis 0°

    // Transparenz des Cafés beim Kippen
    const cafeOpacity = 1 - scrollPercent; // Reduziert die Opazität beim Kippen bis es unsichtbar wird

    // Auswahl der Layer
    const cafeLayer = document.querySelector('.layer.cafe');
    const spaceLayer = document.querySelector('.layer.space');

    // Anwendung der Rotationen und Opazität auf das Café
    cafeLayer.style.transform = `rotateX(${cafeAngle}deg) translateY(${scrollPercent * 50}px)`; // Kippt nach vorne und bewegt sich nach unten
    cafeLayer.style.opacity = cafeOpacity;

    // Space-Layer bewegt sich minimal, um das Gefühl zu erzeugen, dass es sich nach vorne schiebt
    spaceLayer.style.transform = `rotateX(${spaceAngle}deg) translateY(${scrollPercent * 90}px)`;
});
