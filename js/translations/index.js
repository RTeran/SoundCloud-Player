import I18n from 'react-native-i18n';

I18n.fallbacks = true;

I18n.translations = {
  es: {
    home: {
      title: "Reproductor SoundCloud"
    },
    app: {
      search: "Buscar",
      cancel: "Cancelar",
      ok: 'OK',
      share: {
        title: 'Compartir',
        app: 'Aplicación de ',
        scheduler: 'Compartir agenda',
        lastNew: 'Compartir Última Noticia'
      }
    }
  },
  en: {
    home: {
      title: "SoundCloud Player"
    },
    app: {
      search: "Search",
      cancel: "Cancel",
      ok: 'OK',
      share: {
        title: 'Share',
        app: 'App of ',
        scheduler: 'Share scheduler',
        lastNew: 'Share Last New'
      }
    }
  }
}
