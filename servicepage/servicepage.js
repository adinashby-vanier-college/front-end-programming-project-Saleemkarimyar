function showDetails(service) {
    const serviceDetails = {
      webDev: "We specialize in creating modern and responsive websites.",
      mobileApp: "Our team develops user-friendly mobile apps for various platforms.",
      seo: "Improve your website's visibility and rank higher on search engines."
    };
  
    alert(serviceDetails[service] || "More information coming soon!");
  }
  