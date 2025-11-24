// 1. Función crearUsuario
function crearUsuario(usuario) {
    const nombre = usuario.nombre || "Juan";
    const edad = usuario.edad || 20;
    const pais = usuario.pais || "España";
    return `${nombre}, ${edad} años, ${pais}`;
}

// Muestra el resultado de la función
document.getElementById("usuario").textContent = crearUsuario({});

// 2. Función operar
function sumar(a, b) {
    return a + b;
}

function suma_mul(a, b) {
    return a + b * 2;
}

function operar(num1, num2, operacion) {
    return operacion(num1, num2);
}

// Muestra el resultado de las operaciones
document.getElementById("resultado-operar").textContent = 
    `Operar 2, 3 con suma: ${operar(2, 3, sumar)}, Operar 2, 3 con suma_mul: ${operar(2, 3, suma_mul)}`;

// 3. Función recursiva aplanar
function aplanar(arr) {
    let resultado = [];
    arr.forEach(element => {
        if (Array.isArray(element)) {
            resultado = resultado.concat(aplanar(element));
        } else {
            resultado.push(element);
        }
    });
    return resultado;
}

// Muestra el array aplanado
document.getElementById("array-aplanado").textContent = 
    `Array Aplanado: [1, [2, [3, 4]], 5] → ${JSON.stringify(aplanar([1, [2, [3, 4]], 5]))}`;

// 4. Función recursiva listarArchivos
const fs = {
    carpeta1: {
        archivo1: "contenido1",
        archivo2: "contenido2",
        subcarpeta: {
            archivo3: "contenido3"
        }
    },
    carpeta2: {
        archivo4: "contenido4"
    }
};

function listarArchivos(obj) {
    let archivos = [];
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            archivos = archivos.concat(listarArchivos(obj[key]));
        } else {
            archivos.push(key);
        }
    }
    return archivos;
}

// Muestra los archivos
document.getElementById("archivos-listados").textContent = 
    `Archivos Listados: ${JSON.stringify(listarArchivos(fs))}`;

// 5. Función recursiva permutar
function permutar(arr) {
    if (arr.length <= 1) {
        return [arr];
    }
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const perm = permutar(remaining);
        perm.forEach(p => {
            resultado.push([current].concat(p));
        });
    }
    return resultado;
}

// Muestra las permutaciones
document.getElementById("permutaciones").textContent = 
    `Permutaciones de [1, 2, 3]: ${JSON.stringify(permutar([1, 2, 3]))}`;
