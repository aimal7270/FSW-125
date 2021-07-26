const {v4: uuidv4} = require('uuid');

fullInventory = [
{
    Title:"A Curse So Dark and Lonely",
    Author: "Brigid Kemmerer",
    CheckedOut:false,
    Genre: ["Young Adult",
            "Fantasy",
            "Romance",
            "Fiction"],
    SeriesOrder:1,
    _id:uuidv4()
},{
    Title:"A Heart So Fierce and Broken",
    Author: "Brigid Kemmerer",
    CheckedOut:false,
    Genre: ["Young Adult",
            "Fantasy",
            "Romance",
            "Fiction"],
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"A Vow So Bold and Deadly",
    Author: "Brigid Kemmerer",
    CheckedOut:false,
    Genre: ["Young Adult",
            "Fantasy",
            "Romance",
            "Fiction"],
    SeriesOrder:3,
    _id:uuidv4()
},{
    Title:"The Music of Bees",
    Author: "Eileen Garvin",
    CheckedOut:false,
    Genre: ["Adult",
            "Contemporary",
            "Fiction"],
    SeriesOrder: 0,
    _id:uuidv4()
},{
    Title:"The Poet X",
    Author: "Elizabeth Acevedo",
    CheckedOut: true,
    Genre: ["Young Adult",
            "Poetry",
            "Contemporary",
            "Fiction",
            "Romance"],
    SeriesOrder:0,
    _id:uuidv4()
},{
    Title:"Point Blank",
    Author: "Anthony Horowitz",
    CheckedOut: true,
    Genre: ["Young Adult",
            "Fiction",
            "Action",
            "Thriller"],
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"Skeleton Key",
    Author: "Anthony Horowitz",
    CheckedOut:false,
    Genre: ["Young Adult",
            "Fiction",
            "Action",
            "Thriller"],
    SeriesOrder:3,
    _id:uuidv4()
},{
    Title:"Eagle Strike",
    Author: "Anthony Horowitz",
    CheckedOut:false,
    Genre: ["Young Adult",
            "Fiction",
            "Action",
            "Thriller"],
    SeriesOrder:4,
    _id:uuidv4()
},{
    Title:"Big Magic",
    Author: "Elizabeth Gilbert",
    CheckedOut:false,
    Genre: ["Non-Fiction",
            "Self-Help",
            "Buisness",
            "Writing"],
    SeriesOrder:0,
    _id:uuidv4()
},{
    Title:"Save the Cat! Writes a Novel",
    Author: "Jessica Brody",
    CheckedOut:true,
    Genre: ["Non-Fiction",
            "Self-Help",
            "Writing"],
    SeriesOrder:0,
    _id:uuidv4()
},{
    Title:"The Sun and Her Flowers",
    Author: "Rupi Kaur",
    CheckedOut:false,
    Genre: ["Non-Fiction",
            "Romance",
            "Poetry",
            "Adult"],
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"Love Lettering",
    Author: "Kate Clayborn",
    CheckedOut:false,
    Genre: ["Fiction",
            "Romance",
            "Contemporary",
            "Adult"],
    SeriesOrder:0,
    _id:uuidv4()
},{
    Title:"A Rougue of One's Own",
    Author: "Evie Dunmore",
    CheckedOut: true,
    Genre: ["Fiction",
            "Romance",
            "Historical",
            "Adult"],
    SeriesOrder:2,
    _id:uuidv4()
},{
    Title:"The Immortal Life of Henrietta Lacks",
    Author: "Rebecca Skloot",
    CheckedOut:false,
    Genre: ["Non-Fiction",
            "Science",
            "Historical"],
    SeriesOrder:0,
    _id:uuidv4()
}]

module.exports = fullInventory