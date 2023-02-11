// let names = ["bulbasaur", "dino", "seraph"]
// newNames = names.map((name) => {
//     return "<p>" + name + "<p>"
// })

// console.log(Math.floor(Math.random() * 100))

const greeting = (name) => {
        const date = new Date()
        let timeMessage

        if (date.getHours() > 4 && date.getHours() <= 12) {
            timeMessage = "Morning"
        }
    
        else if (date.getHours() > 12 && date.getHours() <= 17) {
            timeMessage = "afternoon"
        }
    
        else if (date.getHours() > 17 && date.getHours() <= 20) {
            timeMessage = "evening"
        }

        else if (date.getHours() > 20 && date.getHours() <= 4) {
            timeMessage = "night"
        }
        
        
        return ("good " + timeMessage + " " + name)
}

console.log(greeting("josepf"))