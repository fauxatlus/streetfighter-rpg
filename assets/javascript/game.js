


var characterSelected = false;
var defenderSelected = false;
var character = {};
var defender = {};
var enemiesDefeated = 0;

gameOver = false;


var ryu = {
  name: "Ryu",
  health: 120,
  baseAttack: 8,
  attack: 8
};

var ken = {
  name: "Ken",
  health: 100,
  baseAttack: 5,
  attack: 5
};

var akuma = {
  name: "Akuma",
  health: 150,
  baseAttack: 20,
  attack: 20
};

var chunli = {
  name: "Chun Li",
  health: 180,
  baseAttack: 25,
  attack: 25
};



function initializeCharacter(chosenCharacter) {
  character.name = chosenCharacter.name;
  character.health = chosenCharacter.health;
  character.baseAttack = chosenCharacter.baseAttack;
  character.attack = chosenCharacter.attack;
}


function initializeDefender(chosenDefender) {
  defender.name = chosenDefender.name;
  defender.health = chosenDefender.health;
  defender.baseAttack = chosenDefender.baseAttack;
  defender.attack = chosenDefender.attack;
}


function moveToEnemies() {
  $(".available-character").removeClass("available-character").addClass("enemy-character");
  $("#enemies-available").append($(".enemy-character"));
}


function resetGame() {
  location.reload()
  $("#game-message").empty();
  $("#restart").hide();

  characterSelected = false;
  defenderSelected = false;
  enemiesDefeated = 0;
  gameOver = false;

  character = {};
  defender = {};
}



$(document).ready(function() {

 
  $("#restart").hide();

  
  $("#ryu-character").on("click", function () {
    
    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(ryu);
      characterSelected = true;

      $("#ryu-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      
      if($("#ryu-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(ryu);
        defenderSelected = true;

        $("#ryu-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });


  $("#ken-character").on("click", function () {
    

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(ken);
      characterSelected = true;

      $("#ken-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
   
      if($("#ken-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(ken);
        defenderSelected = true;

        $("#ken-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });


  $("#akuma-character").on("click", function () {
    

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(akuma);
      characterSelected = true;

      $("#akuma-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      
      if($("#akuma-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(akuma);
        defenderSelected = true;

        $("#akuma-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });




  $("#chunli-character").on("click", function () {
    

    if(characterSelected == false) {
      $("#game-message").empty();

      initializeCharacter(chunli);
      characterSelected = true;
 
      $("#chunli-character").removeClass("available-character").addClass("chosen-character");
      $("#chosen-character").append(this);

      
      moveToEnemies();
    } else if ((characterSelected == true) && (defenderSelected == false)) {
      
      if($("#chunli-character").hasClass("enemy-character")) {
        $("#game-message").empty();

        initializeDefender(chunli);
        defenderSelected = true;

        
        $("#chunli-character").removeClass("enemy-character").addClass("defender-character");
        $("#defender-section").append(this);
      }
    }
  });


  $("#attack").on("click", function() {

    if (characterSelected && defenderSelected && !gameOver) {
      
      defender.health = defender.health - character.attack;
      $(".defender-character").children(".health").html(defender.health);
      $("#game-message").html("<p>You attacked " + defender.name + " for " + character.attack + " damage.<p>");

     
      character.attack = character.attack + character.baseAttack;

      
      if (defender.health > 0) {
        character.health = character.health - defender.baseAttack;
        $(".chosen-character").children(".health").html(character.health);

        
        if (character.health > 0) {
          $("#game-message").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
        } else {
          gameOver = true;
          $("#game-message").html("<p>GAME OVER!!!</p><p>Continue?</p>");
          $("#restart").show();
        }
      } else {
        
        enemiesDefeated++;
        defenderSelected = false;
        $("#game-message").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
        $(".defender-character").hide();

       
        if (enemiesDefeated === 3) {
          gameOver = true;
          $("#game-message").html("<p>YOU WIN!!!</p><p>Continue?</p>");
          $("#restart").show();
        }
      }
    } else if (!characterSelected && !gameOver) {
      $("#game-message").html("<p>You must first select your game character.</p>");
    } else if (!defenderSelected && !gameOver) {
      $("#game-message").html("<p>You must choose an enemy to fight.</p>");
    }

    
  });

  $("#restart").on("click", function() {

    resetGame();

  });




});