import { client } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

// getWatchlist: select, order(id)
export async function getWatchlist() {
  const response = await client
    .from('tv-shows')
    .select()
    .order('id');

  return response.data;
}

// addToWatchlist(tvshow): insert
export async function addToWatchlist(tvshow) {
  const response = await client
    .from('tv-show')
    .insert(tvshow);

  return response.data;
}

// searchTVShows(query): WEIRD/fetch API
export async function searchTVShows(query) {
  const response = await fetch(`/.netlify/functions/tvshow-endpoint?searchQuery=${query}`);

  const json = await response.json();

  return json.data.results;
}

// watchMovie(id): update(bool), match(id), single
export async function watchMovie(id) {
  const response = await client
    .from('tv-shows')
    .update({ 'watched' : true })
    .match({ id })
    .single();

  return response.data;
}