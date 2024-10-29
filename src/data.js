export const textContent = {
  annotation: 'Bottleneck Quest Algorithm is a QGIS plugin ' + 
    'and works in the QGIS3 Processing Framework. This algorithm ' + 
    'provides a way to search bottlenecks on a network of road.',
  blindpass: 'It finds blind pass road branches. This is a set of ' + 
  'road segments without any cyrcles.',
  bottleneck: 'It finds bottlenecks. Such a bit of road ' + 
  'connects two road circles and no another way between that circles beside this bit.',
  parameters: 'The algorithm uses one mandatory parameter (a network layer) and ' +
  'two optional parameters: ' + 
  'a choice to find blind pass road branches also, ' +
  'a topology tolerance in meters (this is a minimal distance between layer endpoints' + 
  ' that will be combined in a single graph vertex). '+ 
  'If bottlenecks or blind pass road branches exist then ' +
  'the algorithm creates a layer with such line sections.',
  image1: 'The Borges Labyrinth on San Giorgio Maggiore Island, Venice.',
  image2: 'Murano, Venice.',
}
