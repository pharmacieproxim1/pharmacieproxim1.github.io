/* ====================================================== */
/* VOTRE CONFIGURATION DE LIENS                          */
/* Modifiez ce fichier pour ajouter/supprimer des liens. */
/* ====================================================== */

// 'linkData' est une liste qui contient vos catégories.
const linkData = [
    
    {
        // Première catégorie
        categoryName: "Pharmacie",
        links: [
            {
                name: "cubiPiluliers",
                url: "https://app.cubipharma.com/Security/Login.aspx",
                icon: "cubi.png"
            },
            {
                name: "I-Vision",
                url: "http://10.9.57.80/Account/Login?ReturnUrl=%2F#",
                icon: "ivision.png"
            },
            {
                name: "Écrans",
                url: "http://http://10.9.57.182:8000/",
                icon: "screen.png"
            }
        ]
    },

    {
        // Deuxième catégorie
        categoryName: "Google",
        links: [
            {
                name: "Gmail",
                url: "https://mail.google.com",
                icon: "gmail.ico"
            },
            {
                name: "Google Drive",
                url: "https://drive.google.com",
                icon: "drive.png"
            },
            {
                name: "Google Calendar",
                url: "https://calendar.google.com",
                icon: "calendar.png"
            }
        ]
    },

    {
        // Troisième catégorie
        categoryName: "Inventaire",
        links: [
            {
                name: "McKesson",
                url: "https://pharmaclik-login.mckesson.ca/",
                icon: "mckesson.ico"
            },
            {
                name: "Pharmaplus",
                url: "https://distributionpharmaplus.com/",
                icon: "pharmaplus.png"
            },
            {
                name: "K&F",
                url: "https://kohlandfrisch.com/fr/",
                icon: "kf.svg"
            },
            {
                name: "ProNarco",
                url: "https://pronarco.com/",
                icon: "pronarco.png"
            }
        ]
    },

    {
        // Quatrième catégorie
        categoryName: "Soins infirmiers",
        links: [
            {
                name: "Cliniciel",
                url: "https://app.cliniciel.com/",
                icon: "cliniciel.png"
            },
            {
                name: "Registre de vaccination",
                url: "https://faius.santepublique.rtss.qc.ca/",
                icon: "vaccin.png"
            },
            {
                name: "Clic Santé",
                url: "https://admin3.clicsante.ca/",
                icon: "clicsante.png"
            }
        ]
    }
    
    // Pour ajouter une nouvelle catégorie, copiez tout un bloc { ... }, ici

];
