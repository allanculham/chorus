/**
 * All core XBMC fields, used when retrieving collections
 * can be used to tweak performance but limit functionality
 *
 * @type {{}}
 */

app.fields = {

  get: function(type){
    if(app.fields.data[type] !== undefined){
      return app.fields.data[type];
    }
    return [];
  },

  data: {
    // fields to grab from xbmc
    artist: [
      "instrument",
      "style",
      "mood",
      "born",
      "formed",
      "description",
      "genre",
      "died",
      "disbanded",
      "yearsactive",
      "musicbrainzartistid",
      "fanart",
      "thumbnail"
    ],
    album: [
      "title",
      "description",
      "artist",
      "genre",
      "theme",
      "mood",
      "style",
      "type",
      "albumlabel",
      "rating",
      "year",
      "fanart",
      "thumbnail",
      "playcount",
      "genreid",
      "artistid",
      "displayartist"
    ],
    song: ["title",
      "artist",
      "albumartist",
      "genre",
      "year",
      "rating",
      "album",
      "track",
      "duration",
      "playcount",
      "fanart",
      "thumbnail",
      "file",
      "albumid",
      "lastplayed",
      "disc",
      "genreid",
      "artistid",
      "displayartist",
      "albumartistid"
    ],
    movie: [
      "title",
      "genre",
      "year",
      "rating",
      "director",
      "trailer",
      "tagline",
      "plot",
      "plotoutline",
      "originaltitle",
      "lastplayed",
      "playcount",
      "writer",
      "studio",
      "mpaa",
      "cast",
      "country",
      "imdbnumber",
      "runtime",
      //"set",
      "showlink",
      "streamdetails",
      //"top250",
      "votes",
      "fanart",
      "thumbnail",
      "file",
      "sorttitle",
      "resume",
      //"setid",
      "dateadded",
      "tag",
      "art"
    ],

    tvshow: [
      "title",
      "genre",
      "year",
      "rating",
      "plot",
      "studio",
      "mpaa",
      "cast",
      "playcount",
      "episode",
      "imdbnumber",
      "premiered",
      "votes",
      "lastplayed",
      // "fanart",
      "thumbnail",
      "file",
      "originaltitle",
      "sorttitle",
      "episodeguide",
      "season",
      "watchedepisodes",
      "dateadded",
      "tag",
      "art"
    ],

    tvepisode: [
      "title",
      "plot",
      "votes",
      "rating",
      "writer",
      "firstaired",
      "playcount",
      "runtime",
      "director",
      "productioncode",
      "season",
      "episode",
      "originaltitle",
      "showtitle",
      "cast",
      "streamdetails",
      "lastplayed",
      "fanart",
      "thumbnail",
      "file",
      "resume",
      "tvshowid",
      "dateadded",
      "uniqueid",
      "art"
    ],

    tvseason: [
      "season",
      "showtitle",
      "playcount",
      "episode",
      "fanart",
      "thumbnail",
      "tvshowid",
      "watchedepisodes",
      "art"
    ],

    file: [
      'title',
      'size',
      'mimetype',
      'file',
      'dateadded',
      'thumbnail',
      'artistid',
      'albumid',
      'uniqueid'
    ],

    playlistItem: [
      "title",
      "artist",
      "albumartist",
      "genre",
      "year",
      "rating",
      "album",
      "track",
      "duration",
      "playcount",
      "director",
      "tagline",
      "plotoutline",
      "originaltitle",
      "lastplayed",
      "mpaa",
      "cast",
      "country",
      "imdbnumber",
      "premiered",
      "runtime",
      "showlink",
      "streamdetails",
      "votes",
      "firstaired",
      "season",
      "episode",
      "showtitle",
      "thumbnail",
      "fanart",
      "file",
      "resume",
      "artistid",
      "albumid",
      "tvshowid",
      "watchedepisodes",
      "disc",
      "tag",
      "art",
      "genreid",
      "displayartist",
      "albumartistid",
      "description",
      "theme",
      "mood",
      "style",
      "albumlabel",
      "sorttitle",
      "uniqueid",
      "dateadded",
      "channel",
      "channeltype",
      "hidden",
      "locked",
      "channelnumber",
      "starttime",
      "endtime"
    ],

    channel: [
      "thumbnail",
      "channeltype",
      "hidden",
      "locked",
      "channel",
      "lastplayed"
    ]
  }


};