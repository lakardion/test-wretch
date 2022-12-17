# Summary

Trying out wretch. A minimal wrapper around fetch.

# Motivation

I've been reluctantly using axios lately.

Fetch has become really good and I don't really see the point in continuing using axios. `wretch` makes the migration way simpler and it has cool features on top of `fetch`. Moreover `axios` is 5x bigger than `wretch`

My main goal in this repo was to replicate what a regular axios interceptor can do. So in `services/auth.ts` added an apiAuth method to inject the auth token to every request through a middleware.

# Context

I created a super simple express api which has only two endpoints which I'm trying out with `wretch`

- `/login` : simply returns a hardcoded token
- `/authed` : a mock endpoint which simulates an authed endpoint. It requires an auth header with a token that was returned in the `/login`

Login button simply makes the request and stores the token in the zustand store.

After that the authed endpoint can be hit with the other button, which will send the request and the interceptor will inject the token that's present in the zustand store.

# Conclusion

`wretch` looks like a really good alternative to `axios` and powers up the native `fetch` library. I will probably start using it in my newer projects!
