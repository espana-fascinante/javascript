/* eslint-disable no-console */
import stem from "../../../../src/morphology/french/stem";
import getMorphologyData from "../../../specHelpers/getMorphologyData";
import filterFunctionWordsFromArray from "../../../../src/helpers/filterFunctionWordsFromArray.js";
import sampleVocabulary from "../stemmerCoverage/sampleVocabulary.json";

const morphologyDataFR = getMorphologyData( "fr" ).fr;

const wordsToStemWithoutFunctionWords = filterFunctionWordsFromArray( sampleVocabulary.words, "fr" );

describe( "Generate stems for French words", () => {
	const corpusWithStems = wordsToStemWithoutFunctionWords.map( word => [ word, stem( word, morphologyDataFR ) ] );

	console.log( JSON.stringify( corpusWithStems ) );
} );
