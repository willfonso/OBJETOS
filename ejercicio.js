class Mercaderia {
  constructor(descripcion, rubro, costo, ganancia, venta) {
      this.descripcion = descripcion;
      this.rubro = rubro;
      this.costo = costo;
      this.ganancia = ganancia;
      this.venta = venta;
  }
      calculo(){
        return `Usted acaba de ingresar ${this.descripcion}`;
      }

}

const articulo1 = new Mercaderia('Coca cola', 'Bebidas', '127', '80', '150');

alert(articulo1.calculo());
