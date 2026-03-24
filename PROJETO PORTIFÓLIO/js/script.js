function mudarCor() {
    const cores = ['#121212', '#1a237e', '#311b92'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}