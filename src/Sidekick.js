import React from 'react';
import HeroPath from './HeroPath';
import paths from './HeroPathContent.json';



const Sidekick = (props) => {
  // var nestedPath = paths.filter(path => path.payload.forEach()));

  // const heroPaths = paths
  //   .filter(path => path.payload.map((i) => {
  //       console.log(i.type)
  //       // return i.type
  //       if (i.type === "overview") {
  //         return (
  //           <HeroPath
  //             key={path.id}
  //             title={path.title}
  //             cards={path.payload}
  //           />
  //         )
  //       }
  //
  //     })
  //   )



  const heroPaths = paths.map((path) => {
    return (
      <HeroPath
        key={path.id}
        title={path.title}
        cards={path.payload}
      />
    )
  })


  // const heroPaths = paths.map((path) => { return path.payload })
  //   .filter(payload => payload.type !== "overview").map((path) => {
  //     return (
  //       <HeroPath
  //         key={path.id}
  //         title={path.title}
  //         cards={path.payload}
  //       />
  //     )
  //   })

    return (
      <div>
        { heroPaths }
      </div>
    );
}

export default Sidekick;
