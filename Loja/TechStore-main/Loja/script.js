// Seleciona elementos importantes
const btnDepartamentos = document.getElementById('btn-departamentos');
const btnDepartamentos2 = document.getElementById('btn-departamentos2');
const sideDrawer = document.getElementById('side-drawer');

// Evento para abrir/fechar a gaveta lateral com o botao
btnDepartamentos.addEventListener('click', () => {
  sideDrawer.classList.toggle('open');
});

// Evento para abrir/fechar a gaveta lateral com a seta
btnDepartamentos2.addEventListener('click', () => {
  sideDrawer.classList.toggle('open');
});



//Carrinho

let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar ao carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0';
}
