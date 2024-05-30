export default function Hero(prop){
    return(
        <main class="row">
        <div class="col">
            <h1 class="text-center">Welcome to {prop.title}</h1>
            <div>
                <img class="img-xxl" src={prop.images} alt={prop.title} />
            </div>
        </div>
    </main>
    );
}