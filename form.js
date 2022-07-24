function handleFormSubmit(e) {
    e.preventDefault();
    // console.log(e.target);
    const Age = document.getElementById("age").value;
    const Gender = document.getElementById("gender").value;
    const SystolicBP = document.getElementById("sBP").value;
    const DiastolicBP = document.getElementById("dBP").value;
    const GlucoseLevel = document.getElementById("glevel").value;
    const CholesterolLevel = document.getElementById("clevel").value;
    const Diabetes = document.getElementById("diabetes").value;
    const CigarPerDay = document.getElementById("cpd").value;
    const PrevalentHypertensive = document.getElementById("ph").value;
    const BPMedication = document.getElementById("bpm").value;

    const data = {
        Age,
        Gender,
        SystolicBP,
        DiastolicBP,
        GlucoseLevel,
        CholesterolLevel,
        Diabetes,
        CigarPerDay,
        PrevalentHypertensive,
        BPMedication,
    };
    console.log(data);
}

/* document.getElementById("predict-btn").addEventListener("click", function () {
    handleFormSubmit();
}); */
