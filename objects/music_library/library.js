const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       },
       
       /////////////////////////////
       // FUNCTIONS TO IMPLEMENT:
       /////////////////////////////
       //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       // prints a list of all playlists, in the form:
       // p01: Coding Music - 2 tracks
       // p02: Other Playlist - 1 tracks
       
       printPlaylists: function(library) {
              for (let playlist in this.playlists) {
                     if (playlist) {
                            console.log(`${this.playlists[playlist].id}: ${this.playlists[playlist].name} - ${this.playlists[playlist].tracks.length} tracks`);
                     }
              }
              
       },
       
       //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       // prints a list of all tracks, using the following format:
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       // t03: Four Thirty-Three by John Cage (Woodstock 1952)
       
       printTracks: function(whichLibrary) {
              for (let track in this.tracks) {
                     if (track) {
                            console.log(`${this.tracks[track].id} ${this.tracks[track].name} by ${this.tracks[track].artist} ${this.tracks[track].album}`);
                     }
              }
       },
       
       //--------------------------------------------------------------------------------------------------------------------------------------------------------------------
       
       // prints a list of tracks for a given playlist, using the following format:
       // p01: Coding Music - 2 tracks
       // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
       // t02: Model View Controller by James Dempsey (WWDC 2003)
       
       printPlaylist: function(chosenPlaylist) {
              const chosenPlaylistdata = this.playlists[chosenPlaylist];
              console.log(`${chosenPlaylistdata.id}: ${chosenPlaylistdata.name} - ${chosenPlaylistdata.tracks.length} tracks`);
              for (let track of chosenPlaylistdata.tracks){
                     console.log(`${this.tracks[track].id}: ${this.tracks[track].name} (${this.tracks[track].album})`);
              }        
       },
       
       //-------------------------------------------------------------------------------------------------------------------------------------------------------------------
       
       // adds an existing track to an existing playlist
       
       addTrackToPlaylist: function(trackId, playlistId) {
              const chosenTrackdata = library.tracks[trackId];
              const chosenPlaylistdata = library.playlists[playlistId];
              if (chosenTrackdata && chosenPlaylistdata) {
                     chosenPlaylistdata.tracks.push(trackId);
              }
              
       },
       //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       
       // generates a unique id
       // (already implemented: use this for addTrack and addPlaylist)
       generateUid: function() {
              return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
       },
       
       //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       // adds a track to the library
       addTrack: function(name, artist, album) {
              newTrack = {};
              if (album && artist && name) {
                     newTrack.id = this.generateUid();
                     newTrack.name = name;
                     newTrack.artist = artist;
                     newTrack.album = album;
              }
              this.tracks['newTrack.id'] = newTrack;
       },
       
       
       //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       // adds a playlist to the library
       addPlaylist: function(name) {
              newPlaylist = {};
              if (name) {
                     newPlaylist.id = this.generateUid();
                     newPlaylist.name = name;
                     newPlaylist.tracks = [];
                     
              }
              this.playlists[newPlaylist.id] = newPlaylist;
              //return printPlaylists(library);
       },
};



//library.addTrackToPlaylist('t03','p01');
//library.printPlaylist("p01");
//library.addTrack("Gravity rides everything", "Modest Mouse", "(The Moon and Antarctica)");
//library.printTracks(library);
//library.addPlaylist("Todd's Jams");
//library.printPlaylists(library);
       
       
       //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
       // STRETCH:
       // given a query string string, prints a list of tracks
       // where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
           let result = library.tracks.match(/query/g);
           console.log(result);
};
//printSearchResults('she');
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
