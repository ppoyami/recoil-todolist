export interface IColor {
  background: string;
  text: {
    primary: string;
    secondary: string;
    disable: string;
  };
  border: string;
  panel: string;
}

export interface ITheme {
  light: {
    colors: IColor;
  };
  dark: {
    colors: IColor;
  };
}

const colors = {
  light: {
    background: '#F0F2F5',
    text: {
      primary: '#000000de',
      secondary: '#00000099',
      disable: '#00000061',
    },
    border: '#E8E8E8',
    panel: '#FAFAFA',
  },
  dark: {
    background: '#121212',
    text: {
      primary: '#ffffffde',
      secondary: '#ffffff99',
      disable: '#ffffff61',
    },
    border: '#ffffff17',
    panel: '#222222',
  },
};

const theme = {
  light: {
    colors: colors.light,
  },
  dark: {
    colors: colors.dark,
  },
};

export default theme;
