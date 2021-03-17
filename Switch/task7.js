
/*  7. Write a program that takes as input a city name and outputs the country where the city is.
You may choose which cities and countries you want to output yourself, however there has
to be at least 5 countries and 15 cities. Note that each country must have a different
number of cities. Input different from the listed cities should output a message&quot;Please
choose a different city&quot;. */
var city="Paris";
switch ( city) {
    case "Belgrade":
    case "Nis":
    case "Novi Sad":
    case "Krusevac":
    case "Valjevo":
    case "Uzice":
    case "Nis":
    case "Brus":
    case "Aleksandrovac":
    case "Prizren":
    case "Zajecar":
    case "Leskovac":
    case "Vranje":
    case "Subotica":
    case "Pancevo":
    case "Sremska Mitrovica":
        console.log ("Serbia");
        break;
    case "Marseille":
    case "Paris":
    case "Lyon":
        console.log ("France");
        break;
    case "Frankfurt":
    case "Dusseldorf":
    case "Berlin":
    case "Hamburg":
        console.log ("Germany")
         break;
    case "Rome":
    case "Milan":
    case "Palermo":
    case "Genoa":
    case "Bologna":
    case "Florence":
    case "Bari":
        console.log ("Italy");
        break;
    case "Madrid":
    case "Barcelona":
    case "Valencia":
    case "Sevilla":
    case "Zaragoza":
    case "Malaga":
    case "Murcia":
    case "Mallorca":
        console.log ("Spain");
        break;
    default:
        console.log ("Please choose the different city");
        break;
}