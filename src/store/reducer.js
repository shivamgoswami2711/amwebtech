export const init = {
  user: {},
  material: {
    RM1: 0,
    RM2: 0,
  },
  product: {
    FP1: 0,
    FP2: 0,
  },
  massage: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    // material Add and Remove operation
    case "Add_RM1":
      return {
        ...state,
        material: { ...state.material, RM1: state.material.RM1 + 1 },
      };
    case "Remove_RM1":
      return {
        ...state,
        material: {
          ...state.material,
          RM1: state.material.RM1 === 0 ? 0 : state.material.RM1 - 1,
        },
      };
    case "Add_RM2":
      return {
        ...state,
        material: { ...state.material, RM2: state.material.RM2 + 1 },
      };
    case "Remove_RM2":
      return {
        ...state,
        material: {
          ...state.material,
          RM2: state.material.RM2 === 0 ? 0 : state.material.RM2 - 1,
        },
      };

    // product Add and Remove operation
    case "Add_FP1": {
      if (state.material.RM1 >= 8 && state.material.RM2 >= 5) {
        return {
          ...state,
          material: {
            RM1: state.material.RM1 - 8,
            RM2: state.material.RM2 - 5,
          },
          product: {
            ...state.product,
            FP1: state.product.FP1 + 1,
          },
        };
      } else {
        if (state.material.RM1 <= 8 && state.material.RM2 <= 5) {
          return {
            ...state,
            massage: ` "${Math.abs(state.material.RM1 - 8)}" RM-1 and 
            "${Math.abs(
              state.material.RM2 - 5 
            )}" RM-2 more material need to create product`,
          };
        } else if (state.material.RM2 <= 5) {
          return {
            ...state,
            massage: ` ${Math.abs(
              state.material.RM2 - 5
            )} more RM-2 material need to create product`,
          };
        } else if (state.material.RM1 <= 8) {
          return {
            ...state,
            massage: ` ${Math.abs(
              state.material.RM1 - 8
            )} more RM-1 material need to create product `,
          };
        }
      }
    }

    case "Remove_FP1": {
      if (state.product.FP1 > 0) {
        return {
          ...state,
          material: {
            RM1: state.material.RM1 + 8,
            RM2: state.material.RM2 + 5,
          },
          product: {
            ...state.product,
            FP1: state.product.FP1 - 1,
          },
        };
      } else {
        return {
          ...state,
        };
      }
      
    }

    case "Add_FP2": {
      if (state.material.RM1 >= 7 && state.material.RM2 >= 10) {
        return {
          ...state,
          material: {
            RM1: state.material.RM1 - 7,
            RM2: state.material.RM2 - 10,
          },
          product: {
            ...state.product,
            FP2: state.product.FP2 + 1,
          },
        };
      } else {
        if (state.material.RM1 <= 7 && state.material.RM2 <= 10) {
          return {
            ...state,
            massage: ` "${Math.abs(state.material.RM1 - 7)}" RM-1 and 
            "${Math.abs(
              state.material.RM2 - 10
            )}" RM-2 more material need to create product`,
          };
        } else if (state.material.RM2 <= 10) {
          return {
            ...state,
            massage: ` ${Math.abs(
              state.material.RM2 - 10
            )} more RM-2 material need to create product`,
          };
        } else if (state.material.RM1 <= 7) {
          return {
            ...state,
            massage: ` ${Math.abs(
              state.material.RM1 - 7
            )} more RM-1 material need to create product `,
          };
        }
      }
    }

    case "Remove_FP2": {
      if (state.product.FP2 > 0) {
        return {
          ...state,
          material: {
            RM1: state.material.RM1 + 7,
            RM2: state.material.RM2 + 10,
          },
          product: {
            ...state.product,
            FP2: state.product.FP2 - 1,
          },
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case "set_massage":
      return {
        ...state,
        massage: action.payload,
      };
    case "clear_massage":
      return {
        ...state,
        massage: "",
      };
    default: {
      return state;
    }
  }
};
