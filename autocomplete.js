$(document).ready(function () {
  
// Autocomplete
  $(function() {
      var availableTags = [
        "Tyrion Lannister",
        "Cersei Lannister",
        "Daenerys Targaryen",
        "Jon Snow",
        "Sansa Stark",
        "Arya Stark",
        "Jorah Mormont",
        "Jaime Lannister",
        "Samwell Tarly",
        "Theon Greyjoy",
        "Petyr Baelish",
        "Varys",
        "Brienne of Tarth",
        "Tywin Lannister",
        "Sandor Clegane",
        "Bronn",
        "Joffrey Baratheon",
        "Catelyn Stark",
        "Bran Stark",
        "Stannis Baratheon",
        "Missandei",
        "Grey Worm",
        "Robb Stark",
        "Margaery Tyrell",
        "Davos Seaworth",
        "Shae",
        "Melisandre",
        "Gilly",
        "Tommen Baratheon",
        "Roose Bolton",
        "Tormund Giantsbane",
        "Gendry",
        "Ygritte",
        "Daario Naharis",
        "Ramsay Bolton",
        "Jaqen H’ghar",
        "Jeor Mormont",
        "Talisa Stark",
        "Ned Stark",
        "Khal Drogo",
        "Ellaria Sand",
        "Robert Baratheon",
        "Viserys Targaryen",
        "Barristan Selmy",
        "Podrick Payne",
        "Hodor",
        "Loras Tyrell",
        "Osha",
        "Olenna Tyrell",
        "Maester Aemon",
        "Shireen Baratheon",
        "Oberyn Martell",
        "Gregor Clegane",
        "Renly Baratheon",
        "Yara Greyjoy",
        "Asha Greyjoy",
        "Brynden Tully",
        "Doran Martell"
        
      ];
      $( "#got" ).autocomplete({
        source: availableTags,
        minLength: 2
      });
    });

  // Change Words??

  $("#change").mouseover(function () {
      $('#change').text("Choose Your Champion");
    });

  $("#change").mouseout(function () {
    $('#change').text("GAME OF THRONES")
  });

});
