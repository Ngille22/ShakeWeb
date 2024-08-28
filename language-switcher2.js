 function changeLanguage(lang) {
        const texts = {
            en: {
                title: "Welcome",
                salesManagement: "Best sales management",
                optimizeSales: "Optimize your sales processes",
                increaseRevenue: "Increase your revenue",
                connection: "Login",
                help: "Help",
                menu: "Menu",
                demo: "Request a demo",
                targetAudience: "Our Target Audience",
                audienceText: "The target audience for our solution includes small and medium-sized enterprises (SMEs) such as retail shops, restaurants, market vendors, service professionals, and pharmacies.",
                keyFeatures: "Key Features",
                salesManagement: "Sales Management",
                salesDescription: "Transaction Processing: Handles sales transactions and generates receipts/invoices.\nInvoice Customization: Offers customizable invoice formats tailored to specific business.",
                crm: "CRM",
                crmDescription: "Information Management: Maintains customer profiles, purchase histories, and loyalty programs.",
                integration: "Integration and Compatibility",
                integrationDescription: "Integration with Thermal Printers: Compatible with thermal printers with Bluetooth for quick and efficient receipt printing.\nOffline Mode: Basic functionality available without an internet connection.",
                faq: "Frequently Asked Questions",
                question1: "Question 1: What is this service about?",
                answer1: "SHAKE is a sales management application that allows businesses to process transactions, integrate thermal printers for quick receipt and invoice printing, and manage customer loyalty programs.",
                question2: "Question 2: How can I use this service?",
                answer2: "Once installed, you can configure your sales and billing options, and start processing transactions then integrate it with your thermal printer, while managing customer relationships through the CRM features.",
                question3: "Question 3: What are the benefits of using this service?",
                benefits: "Increased Efficiency: Fast transaction processing and instant receipt printing.\nCustomization: Ability to customize invoice formats to meet the specific needs of your business.\nOffline Functionality: Continue using basic features even without an internet connection."
            },
            fr: {
                title: "Bienvenue",
                salesManagement: "Meilleure gestion des ventes",
                optimizeSales: "Optimisez vos processus de vente",
                increaseRevenue: "Augmentez vos revenus",
                connection: "Connexion",
                help: "Aide",
                menu: "Menu",
                demo: "Demander une démo",
                targetAudience: "Notre Public Cible",
                audienceText: "Le public cible de notre solution comprend les petites et moyennes entreprises (PME) telles que les commerces de détail, les restaurants, les vendeurs de marché, les professionnels de service et les pharmacies.",
                keyFeatures: "Caractéristiques Clés",
                salesManagement: "Gestion des Ventes",
                salesDescription: "Traitement des Transactions : Gère les transactions de vente et génère des reçus/factures.\nPersonnalisation des Factures : Offre des formats de factures personnalisables adaptés aux besoins spécifiques des entreprises.",
                crm: "CRM",
                crmDescription: "Gestion de l'Information : Maintient les profils clients, les historiques d'achats et les programmes de fidélité.",
                integration: "Intégration et Compatibilité",
                integrationDescription: "Intégration avec les Imprimantes Thermiques : Compatible avec les imprimantes thermiques Bluetooth pour une impression rapide et efficace des reçus.\nMode Hors Ligne : Fonctionnalité de base disponible sans connexion Internet.",
                faq: "Questions Fréquemment Posées",
                question1: "Question 1 : De quoi s'agit-il ?",
                answer1: "SHAKE est une application de gestion des ventes qui permet aux entreprises de traiter des transactions, d'intégrer des imprimantes thermiques pour une impression rapide des reçus et des factures, et de gérer les programmes de fidélité des clients.",
                question2: "Question 2 : Comment puis-je utiliser ce service ?",
                answer2: "Une fois installé, vous pouvez configurer vos options de vente et de facturation, commencer à traiter des transactions puis l'intégrer à votre imprimante thermique, tout en gérant les relations clients grâce aux fonctionnalités CRM.",
                question3: "Question 3 : Quels sont les avantages d'utiliser ce service ?",
                benefits: "Efficacité Accrue : Traitement rapide des transactions et impression instantanée des reçus.\nPersonnalisation : Possibilité de personnaliser les formats de factures pour répondre aux besoins spécifiques de votre entreprise.\nFonctionnalité Hors Ligne : Continuez à utiliser les fonctionnalités de base même sans connexion Internet."
            }
        };

        const langTexts = texts[lang];

        document.querySelector('.vedette').textContent = langTexts.title;
        document.getElementById('sales-management').textContent = langTexts.salesManagement;
        document.getElementById('optimize-sales').textContent = langTexts.optimizeSales;
        document.getElementById('increase-revenue').textContent = langTexts.increaseRevenue;
        document.querySelector('.groupnav h3').textContent = langTexts.connection;
        document.querySelector('.navbar-red .download-button').textContent = langTexts.demo;
        document.querySelector('.audience-title').textContent = langTexts.targetAudience;
        document.querySelector('.audience-section p').textContent = langTexts.audienceText;
        document.querySelector('.section-title').textContent = langTexts.keyFeatures;
        document.querySelectorAll('.feature-title')[0].textContent = langTexts.salesManagement;
        document.querySelectorAll('.feature-description')[0].innerHTML = langTexts.salesDescription.replace(/\n/g, '<br>');
        document.querySelectorAll('.feature-title')[1].textContent = langTexts.crm;
        document.querySelectorAll('.feature-description')[1].textContent = langTexts.crmDescription;
        document.querySelectorAll('.feature-title')[2].textContent = langTexts.integration;
        document.querySelectorAll('.feature-description')[2].innerHTML = langTexts.integrationDescription.replace(/\n/g, '<br>');
        document.querySelector('.faq-section h2').textContent = langTexts.faq;
        document.querySelectorAll('.faq-question')[0].textContent = langTexts.question1;
        document.querySelectorAll('.faq-answer p')[0].textContent = langTexts.answer1;
        document.querySelectorAll('.faq-question')[1].textContent = langTexts.question2;
        document.querySelectorAll('.faq-answer p')[1].textContent = langTexts.answer2;
        document.querySelectorAll('.faq-question')[2].textContent = langTexts.question3;
        document.querySelectorAll('.faq-answer p')[2].textContent = langTexts.benefits;
    }

    document.getElementById('switch-to-en').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('switch-to-fr').addEventListener('click', () => changeLanguage('fr'));
