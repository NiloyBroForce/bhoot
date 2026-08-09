class TeamMember extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute("name") || "";
        const role = this.getAttribute("role") || "";
        const image = this.getAttribute("image") || "";
        const description = this.getAttribute("description") || "";

        const facebook = this.getAttribute("facebook") || "#";
        const instagram = this.getAttribute("instagram") || "#";
        const linkedin = this.getAttribute("linkedin") || "#";

        this.innerHTML = `
            <div class="member">
                <img src="${image}" alt="${name}" />

                <h3>${name}</h3>

                <div class="role">
                    ${role}
                </div>

                <div class="desc">
                    ${description}
                </div>

                <div class="social-icons">
                    <a href="${facebook}" target="_blank" rel="noopener noreferrer">
                        FB
                    </a>

                    <a href="${instagram}" target="_blank" rel="noopener noreferrer">
                        Ig
                    </a>

                    <a href="${linkedin}" target="_blank" rel="noopener noreferrer">
                        L
                    </a>
                </div>
            </div>
        `;
    }
}

customElements.define("team-member", TeamMember);