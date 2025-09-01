import "./style.scss";
import WebpackLogo from "./assets/images/shiba-dog.jpg";
import { greet } from "./app";

const logoElement = document.getElementById("shiba-dog") as HTMLImageElement;
logoElement.src = WebpackLogo;

// TypeScript
const greetingMessage = greet("TypeScript");
const messageContainer = document.createElement("p");
messageContainer.textContent = greetingMessage;
const section = document.querySelector("section");
if (section) {
  section.prepend(messageContainer);
}
