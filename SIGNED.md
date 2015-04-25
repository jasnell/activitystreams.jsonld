##### Signed by https://keybase.io/jasnell
```
-----BEGIN PGP SIGNATURE-----
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJVO7O3AAoJEHNBsVwHCHesHsUIAIe8mjuH+FFdMxWr++LU9+iX
oKAA7om/nt033o1cvjRUsw5cejMJuXiOMfM5L6ZR1SOu7bsaF7jnqf9Mc10rg35C
/IQCMocupcX/Md1LVQLhoqiLLJ0pH2+/WAMdznjyAOBlZnCTITztN8CHreLB+4bs
o+e+//UPv3gvKijmVv14PUzq/3+KZcF8C5/6Ylxpl9ga4rFDrFc7oNQpJPislsRf
T5tuiSYJDgeHTFmnXexrjhQdD9/p5sjQSQIC3i+GaubXsD9/sdV6Nb7IH+4X9nG5
7vkdrfAXSbj3Isr+Bijy21mvznPKL0Q4CMXW8ooeTa8+KkpiVdYBeY4flqW3H9I=
=4Y8H
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file                      contents                                                        
             ./                                                                                        
13             .cfignore               16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
13             .gitignore              16d30e4462189fb14dd611bdb708c510630c576a1f35b9383e89a4352da36c97
14353          activitystreams.jsonld  913a68ef8fad032cbbcf2e2dedd36ffee3c114ec603d26095af24e554b95945d
413            app.js                  bd7b8c69802ad85ef9b5942342550ce5b7708983efddea004d8ed5bf71deca1a
11381          LICENSE                 2bcf83b42c65720625611f1fb2922bc9e3face6a22117331a13c9ed9f3af2903
112            manifest.yml            6f1e342ccf0987aa834f3e5d0ad80e772863a9cc98a89e3a079bec0846525e60
181            package.json            475362515ccfbd653812bc61a77405834b5267b4642f612c6f3e55ca1d8c9c88
28             project.json            81e4b3b0f97481deedce7de5963d15fa1e8f69fb783741bd27e783553258cd41
4732           README.md               65295f8bd74f7e287a330aabc8ef6cf0cd2f268051232cbf5ffeb56e8cffe787
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