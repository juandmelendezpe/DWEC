const db = {
    methods: {
        find: (id) => {
            return db.itens.find(item => item.id === id);
        },
        remove:(itens) => {
            itens.forEach(item => {
                const producto = db.methods.find(item.id);
                producto.quantity = producto.quantity - item.quantity;
            });
            console.log('Se ha eliminado el producto' + db);
            
        
    },
    },
    itens: [
        {
            id: 1,
            title: 'Camiseta',
            price: 100,
            quantity: 5,
        },
        {
            id: 2,
            title: 'Pantalon',
            price: 200,
            quantity: 5,
        },
        {
            id: 3,
            title: 'Zapatos',
            price: 300,
            quantity: 5,
        },
        {
            id: 4,
            title: 'Gorra',
            price: 400,
            quantity: 5,
        },
    ],
}
const shoppingCar = {
    items: [],
    methods: {
        add:(id, quantity) => {
            const cartItem = shoppingCar.methods.get(id);
            if(cartItem){
                if(shoppingCar.methods.hasInventario(id,quantity + cartItem.quantity)){
                    cartItem.quantity += quantity;
                }else{
                    console.log('No hay suficiente inventario');
                    alert('No hay suficiente inventario');
                }
            }else{
                shoppingCar.items.push({ id,quantity});
            }

        },
        remove:(id,quantity) => {
            const cartItem = shoppingCar.methods.get(id);
            if(cartItem.quantity - quantity > 0){
                cartItem.quantity -= quantity;
            }else{
                shoppingCar.items = shoppingCar.items.filter(item => item.id !== id);
            }

        },
        count:() => {
            return shoppingCar.items.reduce((acc,item) => acc + item.quantity,0); // acc = acumulador y item = item actual del array 
        },
        get:(id) => {
            const index = shoppingCar.items.findIndex(item => item.id === id);
            return index !== -1 ? shoppingCar.items[index] : null;
        },
        getTotal:() => {
            let total = shoppingCar.items.reduce((acc,item) => {
                const found = db.methods.find(item.id);
                return acc + found.price * item.quantity;    
            },0);
            return total;


           /* shoppingCar.items.forEach(item => {
                const product = db.methods.find(item.id);
                total += product.price * item.quantity;
            });
            */
        },
        hasInventario:(id,quantity) => {
            return db.itens.find(item => item.id === id).quantity - quantity >= 0;

        },
        compras:()=>{
            db.methods.remove(shoppingCar.items);
            shoppingCar.items = [];
        },
    },
};
// renderizar el carrito

renderStore();

function renderStore(){
    const html = db.itens.map((item) =>{
        return `
        <div class="item">
            <div class="title">${item.title}</div>
            <div class="price">${numeroDeDivisa(item.price)}</div>
            <div class="quantity">${item.quantity}unidades</div>
            <div class="acciones">
                <button class="add" data-id="${item.id}">add to shopping Cart</button>
            </div>
        </div>
        `;
    });

    document.querySelector('#store-container').innerHTML = html.join('');

    /// agragar eventos
    document.querySelectorAll('.item .acciones .add').forEach(button => {
        button.addEventListener('click',() => {
            const id = parseInt(button.getAttribute('data-id'),10);
           const item = db.methods.find(id);
            

           if(item && item.quantity -1 >= 0){
            // agregar al carrito

               shoppingCar.methods.add(id,1);
               console.log(shoppingCar); // renderizar el carrito
               
               renderShoppingCart();
           }else{
               console.log('No hay suficiente inventario');
               alert('No hay suficiente inventario');
           }
        });
    });
    
};


function renderShoppingCart(){
    const html = shoppingCar.items.map((item) =>{
        const product = db.methods.find(item.id);
        return `
        <div class="item">
            <div class="title">${product.title}</div>
            <div class="price">${numeroDeDivisa(product.price)}</div>
            <div class="quantity">${item.quantity}unidades</div>
            <div class="subtotal">
                SubTotal:${numeroDeDivisa(product.price * item.quantity)}
            </div>
            <div class="acciones">
            <button class="addOne" data-id="${product.id}">➕</button>
            <button class="removeOne" data-id="${product.id}">➖</button>
            </div>
            
        </div>
        `;
    });
    const closeButton = `
    <div class="cart-header">
        <button class="btn-close">Cerrar</button>
    </div>
    `;
    const ButtonComprar = shoppingCar.items.length > 0 ? `
    <div class="cart-acciones">
        <button id="btn-comprar">Comprar</button>
    </div>
    ` : '' ;

    const total = shoppingCar.methods.getTotal();
    const totalContainer = `
    <div class="cart-total">
        <div class="total">Total:${numeroDeDivisa(total)}</div>
    </div>
    `;

    const shoppingCartContainer = document.querySelector('#shopping-cart-container');
    shoppingCartContainer.classList.remove('hide'); 
    shoppingCartContainer.classList.add('show');
    shoppingCartContainer.innerHTML =
        closeButton + html.join('') + totalContainer + ButtonComprar;


    // agregar eventos al button de addOne 
    document.querySelectorAll('.addOne').forEach(button => {
        button.addEventListener('click',() => {
            const id = parseInt(button.getAttribute('data-id'),10);
            shoppingCar.methods.add(id,1);
            renderShoppingCart();
            //renderStore();
        });
    });
    // agregar eventos al button de removeOne
    document.querySelectorAll('.removeOne').forEach(button => {
        button.addEventListener('click',(e) => {
            const id = parseInt(button.getAttribute('data-id'));
            shoppingCar.methods.remove(id,1);
            renderShoppingCart();
            //renderStore();
        });
    });
    // agregar eventos al button de cerrar
    document.querySelector('.btn-close').addEventListener('click',(e) => {
       shoppingCartContainer.classList.remove('show'); 
       shoppingCartContainer.classList.add('hide');
            
    });
    // agregar eventos al button de comprar
   const btnComprar = document.querySelector('#btn-comprar')
   if(btnComprar){
       btnComprar.addEventListener('click',(e) => {
           shoppingCar.methods.compras();
           renderStore();
           renderShoppingCart();
       });
   }
};

function numeroDeDivisa(number){
    return new Intl.NumberFormat('de-DE',{
        maximumFractionDigits:2, 
        style: 'currency', 
        currency: 'EUR',
    }).format(number);
};


