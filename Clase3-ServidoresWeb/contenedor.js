const fs = require('fs');

class Contenedor {

    constructor(nombre) {
        this.nombre=nombre;
        this.id = 0;
        this.data =[];
    }

    async save(obj) {
        await this.getAll();
        this.id++;
        this.data.push({
            id:this.id,
            producto: obj
        })
        await fs.promises.writeFile(`./${this.nombre}.txt`,JSON.stringify(this.data, null, 2));
        return this.id;
    }

    async getById(id) {
        await this.getAll();
        return this.data.find((producto) => producto.id === id)
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile(`./${this.nombre}.txt`, 'utf-8')
            if (data) {
                this.data = JSON.parse(data);
                this.data.map((producto) => {
                    if (this.id < producto.id) {
                        this.id = producto.id
                    }
                })
                return this.data;
            }
        } catch (error) {
            return 
        }
    }

    async deleteById(id) {
        await this.getAll();
        await fs.promises.unlink(`./${this.nombre}.txt`);
        const data = this.data.filter((producto) => producto.id !== id);
        await fs.promises.writeFile(`./${this.nombre}.txt`,JSON.stringify(data, null, 2));
    }

    async deleteAll() {
        await fs.promises.unlink(`./${this.nombre}.txt`);
        this.id = 0;
        this.data =[];
    }

}

const productos = new Contenedor('electrodomesticos');
const func = async () => {
    await productos.save({
        title:"lavarropas",
        price:5555,
        thumbnail:'https//:fotos.com/foto1'
    });
    await productos.save({
        title:"heladera",
        price:5000,
        thumbnail:'https//:fotos.com/foto2'
    });
    await productos.save({
        title:"microondas",
        price:9898,
        thumbnail:'https//:fotos.com/foto3'
    });
    const data = await productos.getAll();
    console.log('getAll()',data);

    const data1 = await productos.getById(2);
    console.log('getById(2)',data1);

    await productos.deleteById(2);

    const data4 = await productos.getAll();
    console.log('getAll() despues de deleteById(2)',data4);

 
    //productos.deleteAll();
}
func();
