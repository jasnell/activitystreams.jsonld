##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJWOS5WAAoJEHNBsVwHCHesiggIAIBKpa2rVX9N7Uovb+p6LwU8
44cPxWmN6h+0KDosLDPEqDGuPJRlzKhVyarlr/T8QVUy1Z6tpn0Tp4Pz+Of3y6pf
xgeISMl9hPZImetDGWaqvGDHITjsIAaR9v/3qD2wYKz+xNmfgn14o05i5tUiFcHj
5PruuVNF3cV/QD1o8YgfaPc751nDIZbo2WJuimJwLpmBMPzX5I13bnr1SSGOgTVC
wzOol2Jxuo7OJyxeo/Ej1P5Sg8ErSwryzrN0lsV47/ebnRUlfFXS3y0fdbixXpSa
zOZXakzSledb3xqrRFbcul4S11l0JR/BI2R+cZ3kETIo+UTD2tR1Oh0WJlEIn2Q=
=M/A8
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
13             .cfignore     16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
13             .gitignore    16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
509            app.js        3196741afe1723b94f76da1f88c8148dd73b242eca38cecf0b9c2d51a8296295
11381          LICENSE       2bcf83b42c65720625611f1fb2922bc9e3face6a22117331a13c9ed9f3af2903
89             manifest.yml  41b1d35a7aaac394574e404a77cbcd27b94416157d7620b03c574c48f0a3d6d7
280            package.json  af403b0b4cf8c1f738277fc20d68dfe2bcdaa4de9bdae814546aa5f88e7fd4af
90             README.md     b731dd412f2da1f29d982d4ab757cd9764d22f455e15075dfb0a377b8030ea3d
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.9 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing