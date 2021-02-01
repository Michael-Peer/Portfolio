'use strict'

var gProjs


_createProjects()


function getProjs() {
    return gProjs
}

function getProjById(projId) {
    console.log(projId)
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    })
    console.log(proj)
    return proj
}


function _createProjects() {
    gProjs = [
        _createProject(
            'minesweeper',
            'Minesweeper',
            'Advanced Minesweeper',
            'Minesweeper with added features',
            '...github',
            'minesweeper.png',
            ['game', 'web', 'js']
        ), _createProject(
            'parke',
            'ParkE',
            'Find Parkings',
            'Find Parkings around you',
            '...github',
            'parke.png',
            ['application', 'phone', 'dart']
        ),
        _createProject(
            'shareit',
            'Shareit',
            'New way to share articles',
            'Read, Save and share your favourite articles across phones and devices',
            '...github',
            'shareit.png',
            ['application', 'phone', 'dart']
        )]
}

function _createProject(id, name, title, desc, url, imageUrl, labels) {
    return {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        imageUrl: imageUrl,
        labels: labels
    }
}


