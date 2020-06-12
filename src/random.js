const cartItems = this.state.cartItems;
    const existingProduct = cartItems.filter(p => p.title === product.title);
    const withoutProduct = cartItems.filter(p => p.title !== product.title);
    const updatedUnits = cartItems.filter(p => p.units);

    if (existingProduct > 1) {
      
    }




    const existingProduct = this.state.cartItems.filter(p => p.title === product.title);

    if (existingProduct.length > 0) {
       const withoutExistingProduct = this.state.cartItems.filter(p => p.title !== product.title);
       const updatedUnits = {
        ...existingProduct[0],
        units: existingProduct[0].units + product.units
       }

       this.state.cartItems.push(...withoutExistingProduct, updatedUnits)
       this.setState({
        cartItems: [...withoutExistingProduct, updatedUnits]
       });
    } else {
      this.state.cartItems.push(product);
      this.setState({
        cartItems: [this.state.cartItems, product]
      })
    }


    const updatedUnits = this.state.cartItems.reduce((acc, item) => {
        return acc + existingProduct[0].units + product.units;
    }, 1);