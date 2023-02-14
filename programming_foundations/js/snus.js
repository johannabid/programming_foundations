const snus = {
    name: "Skruf Original White S2 No22",
    price: 89,
    flavor: "traditional",
    sizeOfSnus: "orginal",
    productType: "white portion",
    nicotineStrength: "normal",
    totalAmountOfNicotineInGrams: 21.6,
    addictiveSubstance: true,
    ageLimit18: true,
    possibleEffects: ["increase in pulse", "increase in blood presure", "nausea", "sweating", "dizziness"],
    intake: function () { 
        if (intake === "increase in pulse", "increase in blood presure", "nausea", "sweating", "dizziness") {
            return ("You are expierencing a nicotine shock! Take it out before you vomit!")
    } else {
        return ("You're all good! Snus away!") 
    }
    }
}
console.log(snus.intake())


// not sure if this is a proper if statement
// alternative what if statement:

