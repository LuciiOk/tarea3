export interface News {
    id:number,
    idcategoria:number,
    titulo:string,
    fecha:string,
    autor:string,
    descripcion:string,
    contenido:string,
    img:string,
    destacado:boolean
}

const newLocal = `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum neque sed erat tincidunt ultricies. Praesent quis magna et erat consectetur suscipit vel ac neque. In aliquet diam at purus convallis, scelerisque lobortis nunc maximus. Maecenas vulputate, eros at imperdiet ultricies, mauris felis condimentum erat, at vehicula arcu massa id sapien. Maecenas suscipit semper pellentesque. Duis sit amet mauris non nunc efficitur varius. Integer accumsan lacus id tellus imperdiet, interdum ullamcorper sapien commodo.<br/><br/>
        Cras sit amet tellus ante. Curabitur at laoreet dolor. Cras eu erat augue. Donec ornare metus sed diam blandit, tincidunt aliquet dolor lacinia. Aenean odio dui, congue a eros non, lobortis laoreet nisl. Nullam semper erat neque, eu hendrerit mi semper vitae. Proin a malesuada nulla, sit amet tempus urna.<br/><br/>
        Fusce vel diam sagittis, malesuada turpis vel, volutpat enim. Suspendisse iaculis lorem vitae ante scelerisque, ac elementum velit condimentum. Nam non maximus enim, viverra varius velit. Aenean at facilisis nunc, sed elementum lorem. Nullam a mauris et lacus hendrerit lobortis eget at tortor. Nullam iaculis elit nec arcu malesuada, porta tempus diam fermentum. Vivamus id nisl ut risus dignissim varius. Cras at nunc ipsum. Nulla congue justo nisi, eu gravida lorem viverra eu. Sed et efficitur justo. Ut elit lectus, varius ac lacus non, porttitor faucibus lectus. Praesent vel massa sed tellus maximus lacinia.<br/><br/>
        Etiam mollis cursus varius. Mauris tristique, ex lacinia feugiat varius, neque dui auctor nibh, vulputate iaculis mauris massa eu tellus. Donec risus tortor, vehicula non nisi sed, luctus congue tortor. Mauris porttitor lobortis enim, ac sodales velit elementum ac. Donec nisi augue, lobortis quis varius vel, ultricies non massa. Pellentesque imperdiet blandit turpis id malesuada. Aenean nisl enim, iaculis ac congue id, faucibus quis nisl. Nulla dignissim turpis eu risus sagittis vulputate. Sed vehicula volutpat vehicula. Aliquam et ante vel arcu porttitor condimentum ac at velit. Donec velit orci, molestie ut molestie in, condimentum sit amet turpis. Etiam nibh mi, ultricies nec congue ac, fringilla eu arcu.<br/><br/>
        Nullam vitae erat sapien. Nullam sed sapien euismod, blandit nisi quis, hendrerit diam. Nulla sit amet odio condimentum, pretium ante posuere, fermentum purus. Curabitur tincidunt aliquam nulla, in rhoncus massa maximus id. Etiam ac lorem mollis, ultrices orci ac, ultricies justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus hendrerit facilisis lorem eleifend vulputate. Proin quam risus, vehicula a placerat vel, consequat id lorem. Cras vitae nulla porta eros fermentum sodales sed in orci. Etiam id sem molestie, luctus quam sed, faucibus dolor. Cras purus eros, aliquet at odio rutrum, feugiat dignissim nibh. Curabitur erat felis, gravida sed faucibus vitae, pulvinar vitae quam. Nulla hendrerit diam lectus, a porttitor nibh semper ac.<br/><br/>
        Fusce vestibulum maximus hendrerit. Quisque eleifend velit vel ipsum rhoncus tincidunt. Etiam massa augue, consequat non dignissim vel, blandit id ex. Nam sed mattis lacus, in mollis mi. Phasellus suscipit, quam ac dignissim blandit, eros elit suscipit ex, nec cursus tellus mi eu ligula. Mauris scelerisque, nulla vel iaculis consectetur, lorem leo suscipit dolor, vel varius lorem mi nec urna. Proin.<br/><br/> `;
export let noticias:News[] = [
    {
        id:1,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 1,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },
    {
        id:2,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 2,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },
    {
        id:3,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 3,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },
    {
        id:4,
        titulo: 'Noticia',
        fecha: '10/11/2021',
        idcategoria: 0,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:false
    },
    {
        id:4,
        titulo: 'Noticia',
        fecha: '10/11/2021',
        idcategoria: 0,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:false

    },
    {
        id:5,
        titulo: 'Noticia',
        fecha: '10/11/2021',
        idcategoria: 0,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:false
    },
    {
        id:6,
        titulo: 'Noticia',
        fecha: '10/11/2021',
        idcategoria: 0,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:false
    },
    {
        id:7,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 1,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },{
        id:8,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 1,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },    {
        id:9,
        titulo: 'Noticia',
        fecha: '10/11/2021',
        idcategoria: 0,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:false
    },
    {
        id:10,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 1,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    },{
        id:11,
        titulo: 'El juego de Calamar se convierte en la serie mas vista de netflix',
        fecha: '10/11/2021',
        idcategoria: 1,
        autor: 'Juan Perez',
        descripcion: 'Cras vitae mauris scelerisque, mattis augue at, molestie sem. In cursus et erat vitae rhoncus. Suspendisse venenatis orci elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam mattis. ',
        contenido: newLocal,
        img: 'https://i.blogs.es/100784/1177246/1366_2000.jpeg',
        destacado:true
    }
]