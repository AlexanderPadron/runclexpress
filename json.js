const translate = {
  fichaCliente: {
    BusinessName: {
      es: 'Razón social',
      br: 'Razão social',
      en: 'Business name',
    },
    FantasyName: {
      es: 'Nombre de fantasía',
      br: 'Nome fantasia',
      en: 'Fantasy name',
    },
    CommercialBusiness: {
      es: 'Giro comercial',
      br: 'Giro comercial',
      en: 'Commercial business',
    },
    Email: {
      es: 'Correo electronico',
      br: 'Correio eletrônico',
      en: 'email',
    },
    Country: {
      es: 'País',
      br: 'País',
      en: 'Country',
    },
    Address: {
      es: 'Domicilio',
      br: 'Endereço',
      en: 'Address',
    },
    Telephone: {
      es: 'Teléfono',
      br: 'Telefone',
      en: 'Telephone',
    },
  },
  FinalBeneficiary: {
    Name: {
      es: 'Nombre',
      br: 'Nomes',
      en: 'name',
    },
    LastName: {
      es: 'Apellido Paterno',
      br: 'Apelido paterno',
      en: 'Last Name',
    },
    MotherslastName: {
      es: 'Apellido Materno',
      br: 'Sobrenome materno',
      en: "Mother's last name",
    },
    RUT: {
      es: 'Rut',
      br: 'Rut',
      en: 'Rotina',
    },
  },
}


const languaje = (area , lenguaje) => {
  const r = {}
    for(let k1 in translate){
      if(k1 === area){
        r[k1]={}
        for(let k2 in translate[k1]){
          for(let k3 in translate[k1][k2])
              if(k3 === lenguaje){
                r[k1][k2] = translate[k1][k2][k3]
          }
        }
      }
    }
    return r
}

console.log(JSON.stringify(languaje('fichaCliente','es')))