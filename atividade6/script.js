function mostrarNumero() {
    const n = document.getElementById("numero2").value;
    document.getElementById("res2").innerText = `O número informado foi ${n}`;
  }
  
  function somar() {
    const a = Number(document.getElementById("n3a").value);
    const b = Number(document.getElementById("n3b").value);
    document.getElementById("res3").innerText = `Soma: ${a + b}`;
  }
  
  function media() {
    const notas = ["n4a", "n4b", "n4c", "n4d"].map(id =>
      Number(document.getElementById(id).value)
    );
    const resultado = notas.reduce((a, b) => a + b, 0) / notas.length;
    document.getElementById("res4").innerText = `Média final: ${resultado.toFixed(2)}`;
  }
  
  function converterMetros() {
    const metros = Number(document.getElementById("n5").value);
    document.getElementById("res5").innerText = `${metros * 100} centímetros`;
  }
  
  function areaCirculo() {
    const r = Number(document.getElementById("raio").value);
    const area = Math.PI * r * r;
    document.getElementById("res6").innerText = `Área: ${area.toFixed(2)}`;
  }
  
  function areaQuadrado() {
    const lado = Number(document.getElementById("lado").value);
    const area = lado * lado;
    document.getElementById("res7").innerText = `Área: ${area} | Dobro da área: ${2 * area}`;
  }
  
  function calcularSalario() {
    const valor = Number(document.getElementById("valorHora").value);
    const horas = Number(document.getElementById("horasMes").value);
    const salario = valor * horas;
    document.getElementById("res8").innerText = `Salário: R$ ${salario.toFixed(2)}`;
  }
  
  function fToC() {
    const f = Number(document.getElementById("f").value);
    const c = 5 * ((f - 32) / 9);
    document.getElementById("res9").innerText = `Celsius: ${c.toFixed(2)}°C`;
  }
  
  function cToF() {
    const c = Number(document.getElementById("c").value);
    const f = (c * 9 / 5) + 32;
    document.getElementById("res10").innerText = `Fahrenheit: ${f.toFixed(2)}°F`;
  }
  