let listingTypes = (array) => array.map(element =>  typeof(element))
                                   .reduce((dict, type) => {
                                    dict[type] = dict[type] ?
                                    dict[type] +1 : 1;
                                    return dict;
                                  }, {});
