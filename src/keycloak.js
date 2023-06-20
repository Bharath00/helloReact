import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://testkeycloakapp.azurewebsites.net",
 realm: "ReactRealm",
 clientId: "ReactApp",
});

export default keycloak;
