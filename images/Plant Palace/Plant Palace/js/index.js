// console.log("shaheer");

let one = document.querySelector('#search-input');
one.addEventListener('input', function () {
    // console.log("some one entered");
    const search_input = document.querySelector('#search-input');
    const filter = search_input.value.toLowerCase();

    const card = document.querySelectorAll('.plant_card');

    card.forEach((items) => {
        let text = items.textContent;
        if (text.toLowerCase().includes(filter.toLowerCase())) {
            items.style.display = '';

        }
        else {
            items.style.display = 'none';
        }
    });
});

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);



  const plantTypeSelect = document.getElementById("plant-type");
  const careInstructionsDiv = document.getElementById("care-instructions");
  
  plantTypeSelect.addEventListener("change", displayCareInstructions);
  
  function displayCareInstructions() {
    const selectedPlantType = plantTypeSelect.value;
    const careInstructions = getCareInstructions(selectedPlantType);
  
    careInstructionsDiv.innerHTML = `<h2>Care Instructions for ${selectedPlantType}</h2>
      <p>${careInstructions}</p>`;
  }
  
  function getCareInstructions(plantType) {
    switch (plantType) {
      case "spider-plant":
        return "Spider plants thrive in bright, indirect light and prefer well-draining soil. Water them regularly, keeping the soil evenly moist.";
      case "succulent":
        return "Succulents need plenty of sunlight and well-draining soil. Allow the soil to dry between waterings.";
      case "fern":
        return "Ferns enjoy medium to low light and high humidity. Keep the soil consistently moist and mist the leaves regularly.";
      case "rose-plant":
        return "Rose plants require full sun and well-draining soil. Water deeply and regularly, especially during dry periods.";
      case "sunflower-plant":
        return "Sunflowers thrive in full sun and well-draining soil. Provide support for tall varieties and keep the soil consistently moist.";
      case "marigolds-plant":
        return "Marigolds prefer full sun and well-draining soil. Deadhead spent flowers to promote continuous blooming.";
      case "peace-lilies":
        return "Peace lilies thrive in low to medium light and appreciate consistently moist soil. Avoid overwatering.";
      case "snake-plants":
        return "Snake plants are low-maintenance and can tolerate low light conditions. Allow the soil to dry between waterings.";
      case "aloe-vera-plants":
        return "Aloe vera plants need bright, indirect light and well-draining soil. Water sparingly, allowing the soil to dry out between waterings.";
      case "echeveria-plant":
        return "Echeveria plants thrive in bright sunlight and well-draining soil. Water deeply when the soil is dry.";
      case "jade-plant":
        return "Jade plants need bright light and well-draining soil. Allow the soil to dry before watering.";
      case "butterfly-bushes":
        return "Butterfly bushes enjoy full sun and well-draining soil. Prune them in spring to encourage new growth.";
      case "azaleas-bushes":
        return "Azaleas prefer filtered sunlight and well-draining, acidic soil. Water regularly, especially during dry spells.";
      case "hydrangeas-bushes":
        return "Hydrangeas thrive in partial shade and moist, well-draining soil. Adjust soil pH to control flower color.";
      default:
        return "Select a plant type to view care instructions.";
    }
  }