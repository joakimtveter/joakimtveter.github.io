function toggleExperience() {
    const exps = document.querySelectorAll("hideable");
    exps.forEach(exp => {
    exp.classList.toggle("hidden"));
  };

