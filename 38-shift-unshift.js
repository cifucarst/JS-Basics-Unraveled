// Methods that modify the original array (Mutability)

// shift()
const colors = ["yellow","blue","red"]
const removedColors = colors.shift()

console.log(colors)
console.log(removedColors)

//_________________________________________________________________________

// unshift()

const newColors = colors.unshift("pink","purple")
console.log(colors)
console.log(newColors)

/*
Exercise managing a playlist

Imagine you are developing a music application, and you need to create a function
to manage a playlist. Your function should take a playlist array, remove the first 
song using the 'shift' method, add a new song to the beginning using the 'unshift' 
method, and return the updated playlist*/

function managePlaylist(playlist,newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ["sweater weater", "What you know", "Eventually"]
const newSongToAdd = "The Adults are talking"

const updatedPlaylist = managePlaylist(initialPlaylist,newSongToAdd)
console.log(`initial playlist: ${initialPlaylist}`)
console.log(`new song to add: ${newSongToAdd}`)
console.log(`updated playlist: ${updatedPlaylist}`)