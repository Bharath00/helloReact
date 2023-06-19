import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://keycloaktestisd.eastus.cloudapp.azure.com",
 realm: "ReactRealm",
 clientId: "ReactApp",
});

export default keycloak;
