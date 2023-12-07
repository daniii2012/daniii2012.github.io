let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #6d234d;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #6d234d;">Estudio Ingeniría en Compuación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
