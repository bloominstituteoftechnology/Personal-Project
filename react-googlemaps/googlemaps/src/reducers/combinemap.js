// Load a Landsat 8 image.
var image = ee.Image('LANDSAT/LC08/C01/T1/LC08_044034_20140318');

// Combine the mean and standard deviation reducers.
var reducers = ee.Reducer.mean().combine({
  reducer2: ee.Reducer.stdDev(),
  sharedInputs: true
});

// Use the combined reducer to get the mean and SD of the image.
var stats = image.reduceRegion({
  reducer: reducers,
  bestEffort: true,
});

// Display the dictionary of band means and SDs.
print(stats);
      