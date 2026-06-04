class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="hero-nav">
            <div class="nav-item"><h3><a href="../index.html" class="nav-link">Home</a></h3></div>
            <div class="separator">|</div>
            <div class="nav-item"><h3>Experience</h3></div>
            <div class="separator">|</div>
            <div class="nav-item"><h3><a href="gallery/index.html" class="nav-link">Project Gallery</a></h3></div>
            <div class="separator">|</div>
            <div class="nav-item"><h3><a href="https://medium.com/@packetfury" class="nav-link">Blog</a></h3></div>
            <div class="separator">|</div>
            <div class="nav-item"><h3>Contact</h3></div>
        </div>
        `;
    }
}
customElements.define('nav-bar', Navbar);