const express = require('express');
const app = express();

const PORT = 3000;


app.get('/cats', (req, res) => {
    res.send(
        [{name: 'Tilly',
        age: 3,
        breed: 'Tabby'
        },
        {name: 'Dave',
        age: 2,
        breed: 'Tabby'
        },
        {name: 'Kali',
        age: 1,
        breed: 'Calico'
        }]
    )
});
app.get('/plants', (req, res) => {
    res.send(
        [{name: 'Tomato',
        type: 'fruit',
        color: 'red'
        },
        {name: 'Cucumber',
        type: 'vegtable',
        color: 'green'
        },
        {name: 'Daisy',
        type: 'flower',
        color: 'white'
        },]
    )
});
app.get('/shapes', (req, res) => {
    res.send(
        [{name: 'Square',
        sides: 4,
        Quadrilateral: true,
        },
        {name: 'Rectangle',
        sides: 4,
        Quadrilateral: true,
        },
        {name: 'Octogon',
        sides: 8,
        Quadrilateral: false,
        },]
    )
});

//server start logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});