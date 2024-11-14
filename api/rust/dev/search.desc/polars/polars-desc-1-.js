searchState.loadedDescShard("polars", 1, "Parse a CloudLocation from an url.\nConstruct a new CloudWriter, re-using the given …\nConstruct an object_store <code>Path</code> from a string without any …\nThe prefix inside the bucket, this will be the full key …\nQueues the given command for further execution.\nThe scheme (s3, …).\nPerforms a set of actions within a synchronous update.\nSet the maximum number of retries.\nWrapper that implements <code>IntoCredentialProvider</code>, <code>Debug</code>, …\nPrefer using <code>PlCredentialProvider::from_func</code> instead of …\nFor testing purposes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAccepts a function that returns (credential, expiry time …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOptions to connect to various cloud providers.\nRepresents the compression algorithms that we have …\nIf the given byte slice starts with the “magic” bytes …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nDecompress <code>bytes</code> if compression is detected, otherwise …\nA nested list with a fixed size in each row\nThe set of supported logical types in this crate.\nThe time units defined in Arrow.\nOpaque binary data of variable length whose offsets are …\nA binary type that inlines small values and can intern …\nA binary true or false.\n<code>true</code> and <code>false</code>.\nA 32-bit date representing the elapsed time since UNIX …\nA 32-bit date representing the elapsed time since UNIX …\nAn <code>i32</code> representing the elapsed time since UNIX epoch …\nAn <code>i64</code> representing the elapsed time since UNIX epoch …\nA 64-bit date representing the elapsed time since UNIX …\nA 64-bit date representing the elapsed time since UNIX …\nA 64-bit date representing the elapsed time since UNIX …\nA 128-bit fixed point decimal number with a scale.\nFixed point decimal type optional precision and …\nDecimal value with precision and scale precision is the …\nDecimal backed by 256 bits\nA dictionary encoded array (<code>key_type</code>, <code>value_type</code>), where …\nA 64-bit integer representing difference between …\nMeasure of elapsed time. This elapsed time is a physical …\nExtension type.\nCharacterizes the name and the <code>DataType</code> of a column.\nOpaque binary data of fixed size. Enum parameter specifies …\nA list of some logical data type with a fixed number of …\nAn 16-bit float\nA 32-bit floating point number.\nA <code>f32</code>\nA 64-bit floating point number.\nA <code>f64</code>\nHashmap: maps the indexes from the global …\nA 16-bit integer number.\nAn <code>i16</code>\nA 32-bit integer number.\nAn <code>i32</code>\nA 64-bit integer number.\nAn <code>i64</code>\nAn 8-bit integer number.\nAn <code>i8</code>\nA “calendar” interval modeling elapsed time that takes …\nOpaque binary data of variable length whose offsets are …\nA list of some logical data type whose offsets are …\nA variable-length UTF-8 encoded string whose offsets are …\nNested type, contains arrays that are filled with one of …\nA nested list with a variable size in each row\nA list of some logical data type whose offsets are …\nUtf8Array: caches the string values and a hash of all …\nMaps a logical type to a chunked array implementation of …\nA nested type that is represented as\nTime in microseconds.\nTime in milliseconds.\nTime in nanoseconds.\nNull type\nCan be used to fmt and implements Any, so can be …\nA generic type that can be used in a <code>Series</code> &amp;’static str …\nThis hashmap uses an IdHasher\nString type that inlines small strings.\nSafety\nA dimension in a reshape.\nTime in seconds.\nA UTF8 encoded string type.\nString data\nAn UTF8 encoded string type.\nA nested <code>ArrowDataType</code> with a given number of <code>Field</code>s.\nA 64-bit time representing the elapsed time since midnight …\nA 64-bit time representing the elapsed time since midnight …\nA 32-bit time representing the elapsed time since midnight …\nA 64-bit time representing the elapsed time since midnight …\nA <code>i64</code> representing a timestamp measured in <code>TimeUnit</code> with …\nAn unsigned 16-bit integer number.\nAn <code>u16</code>\nAn unsigned 32-bit integer number.\nAn <code>u32</code>\nAn unsigned 64-bit integer number.\nAn <code>u64</code>\nAn unsigned 8-bit integer number.\nAn <code>u8</code>\nA nested datatype that can represent slots of differing …\nA type unknown to Arrow.\nA variable-length UTF-8 encoded string whose offsets are …\nA string type that inlines small values and can intern …\nGet data type of <code>ChunkedArray</code>.\nGets <code>AnyValue</code> from <code>LogicalType</code>\nSafety\nSafety\nSafety\nSafety\nHashmap: maps the indexes from the global …\nUtf8Array: caches the string values and a hash of all …\nHashmap: maps the indexes from the global …\nUtf8Array: caches the string values and a hash of all …\nEnable the global string cache as long as the object is …\nDisable and clear the global string cache.\nEnable the global string cache.\nCheck whether the global string cache is enabled.\nIf <code>ambiguous</code> is length-1 and not equal to “null”, we …\nSafety\nSafety\nSpecialized expressions for <code>Series</code> with dates/datetimes.\nGet the base offset from UTC.\nChange the underlying <code>TimeUnit</code>. And update the data …\nGet the century of a Date/Datetime\nCombine an existing Date/Datetime with a Time, creating a …\nChange the underlying <code>TimeZone</code> of the <code>Series</code>. This does …\nGet the (local) date of a Date/Datetime.\nGet the (local) datetime of a Datetime.\nGet the month of a Date/Datetime.\nGet the additional offset from UTC currently in effect …\nReturns the argument unchanged.\nGet the hour of a Datetime/Time64.\nCalls <code>U::from(self)</code>.\nGet the iso-year of a Date/Datetime. This may not …\nGet the microsecond of a Time64 (scaled from nanosecs).\nGet the millennium of a Date/Datetime\nGet the millisecond of a Time64 (scaled from nanosecs).\nGet the minute of a Datetime/Time64.\nGet the month of a Date/Datetime.\nGet the nanosecond part of a Time64.\nGet the ordinal_day of a Date/Datetime.\nExtract quarter from underlying NaiveDateTime …\nRound the Datetime/Date range into buckets.\nGet the second of a Datetime/Time64.\nConvert from Date/Time/Datetime into String with the given …\nGet the (local) time of a Date/Datetime/Time.\nReturn the timestamp (UNIX epoch) of a Datetime/Date.\nConvert from Date/Time/Datetime into String with the given …\nExpress a Duration in terms of its total number of integer …\nExpress a Duration in terms of its total number of integer …\nExpress a Duration in terms of its total number of …\nExpress a Duration in terms of its total number of …\nExpress a Duration in terms of its total number of integer …\nExpress a Duration in terms of its total number of …\nExpress a Duration in terms of its total number of integer …\nTruncate the Datetime/Date range into buckets.\nExtract the week from the underlying Date representation. …\nExtract the ISO week day from the underlying Date …\nChange the underlying <code>TimeUnit</code> of the <code>Series</code>. This does …\nGet the year of a Date/Datetime\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nSafety\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nSafety\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nInfer the data type of a record\nInfer the schema of a CSV file by reading through the …\nCalls <code>U::from(self)</code>.\nSearch through a series of chunks for the first position …\nCalculate the millennium from the underlying NaiveDateTime …\nExtract day from underlying NaiveDateTime representation. …\nExtract hour from underlying NaiveDateTime representation. …\nExtract year from underlying NaiveDateTime representation. …\nCalculate the millennium from the underlying NaiveDateTime …\nExtract minute from underlying NaiveDateTime …\nExtract month from underlying NaiveDateTime representation.\nReturns the number of nanoseconds since the whole non-leap …\nReturns the day of year starting from 1.\nExtract ordinal year from underlying NaiveDateTime …\nExtract quarter from underlying NaiveDateTime …\nExtract second from underlying NaiveDateTime …\nConvert from Time into String with the given format. See …\nConvert date(time) object to timestamp in <code>TimeUnit</code>.\nConvert Time into String with the given format. See chrono …\nReturns the ISO week number starting from 1. The return …\nReturns the ISO weekday number where monday = 1 and sunday …\nExtract year from underlying NaiveDateTime representation. …\nUtility trait to slice concrete arrow arrays whilst …\nSlices this <code>Array</code>.\nSlices the <code>Array</code>.\nReturn the indices of the bottom k elements.\nUtility trait to slice concrete arrow arrays whilst …\nSort options for multi-series sorting.\nOptions for single series sorting.\nIf true sort in descending order. Default <code>false</code>.\nOrder of the columns. Default all `false``.\nLimit a sort output, this is for optimization purposes and …\nLimit a sort output, this is for optimization purposes and …\nIf true maintain the order of equal elements. Default <code>false</code>…\nWhether maintain the order of equal elements. Default <code>false</code>…\nIf true sort in multiple threads. Default <code>true</code>.\nWhether sort in multiple threads. Default <code>true</code>.\nWhether place null values last. Default <code>false</code>.\nWhether place null values last. Default <code>false</code>.\nSlices this <code>Array</code>.\nSlices the <code>Array</code>.\nConcat with the values from a second StringChunked.\nCheck if strings contain a regex pattern.\nCheck if strings contain a given literal\nCount all successive non-overlapping regex matches.\nCount all successive non-overlapping regex matches.\nExtract the nth capture group from pattern.\nExtract each successive non-overlapping regex match in an …\nExtract each successive non-overlapping regex match in an …\nExtract all capture groups from pattern and return as a …\nReturn the index position of a regular expression …\nReturn the index position of a literal substring in the …\nHorizontally concatenate all strings.\nReplace the leftmost regex-matched (sub)string with …\nReplace all regex-matched (sub)strings with another string\nReplace the leftmost literal (sub)string with another …\nReplace all matching literal (sub)strings with another …\nEscapes all regular expression meta characters in the …\nSlice the first <code>n</code> values of the string.\nGet the length of the string values as number of bytes.\nGet the length of the string values as number of chars.\nReverses the string values\nSlice the string values.\nSlice the last <code>n</code> values of the string.\nModify the strings to their lowercase equivalent.\nModify the strings to their titlecase equivalent.\nModify the strings to their uppercase equivalent.\nRepresents a user-defined function\nThe function implementation.\nThe function signature.\nname\nOptions for the function.\nThe function output type.\nCompare <code>Series</code> and <code>ChunkedArray</code>’s and get a <code>boolean</code> mask …\nUsed to convert a <code>ChunkedArray</code>, <code>&amp;dyn SeriesTrait</code> and <code>Series</code>\nSeries\nReturns the sum of the array as an f64.\nSafety\nCreate a new Series without checking if the inner dtype of …\nGet the bitwise AND of the Series as a new Series of …\nAppend in place. This is done by adding the chunks of <code>other</code>…\nRetrieve the indexes needed for a sort.\nGet first indexes of unique values.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Array</code>\nReturns a reference to the Arrow ArrayRef\nGet a hold to self as <code>Any</code> trait reference.\nGet a hold to self as <code>Any</code> trait reference. Only …\nPacks every element into a list.\nRechunk and return a pointer to the start of the Series. …\nOnly implemented for numeric types\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Binary</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Binary</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Boolean</code>\nCast from physical to logical types without any checks on …\nCast <code>Series</code> to another <code>DataType</code>.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Categorical</code>\nGet the lengths of the underlying chunks\nUnderlying chunks.\nUnderlying chunks.\nSafety\nClone inner ChunkedArray and wrap in a new Arc\nRedo a length and null_count compute\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Date</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Datetime</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Decimal</code>\nDrop all null values and return a new Series.\nGet datatype of series.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Duration</code>\nCheck for equality.\nCreate a boolean mask by checking for equality.\nCheck for equality where <code>None == None</code>.\nCreate a boolean mask by checking for equality.\nCheck if series are equal. Note that <code>None == None</code> …\nCheck if all values in series are equal where <code>None == None</code> …\nReturns an estimation of the total (heap) allocated size …\nExplode a list Series. This expands every item to a new …\nExtend the memory backed by this array with the values …\nExtend with a constant value.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Float32</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Float64</code>\nGet field (used in schema)\nReplace None values with one of the following strategies:\nFilter by boolean mask. This operation clones data.\nGet the first element of the <code>Series</code> as a <code>Scalar</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new <code>Series</code> from a slice of AnyValues.\nConstruct a new <code>Series</code> with the given <code>dtype</code> from a slice …\nTakes chunks and a polars datatype and constructs the …\nTraverse and collect every nth element in a new array.\nGet a single value by index. Don’t use this operation …\nRecurse nested types until we are at the leaf array.\nGet the value at this index as a downcastable Any trait …\nGet the value at this index as a downcastable Any trait …\nGet a single value by index. Don’t use this operation …\nCreate a boolean mask by checking if self &gt; rhs.\nCreate a boolean mask by checking if self &gt;= rhs.\nReturn if any the chunks in this <code>ChunkedArray</code> have nulls.\nGet the head of the Series.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int16</code>\nUnpack to <code>ChunkedArray</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int64</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int8</code>\nConvert the values of this Series to a ListChunked with a …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if Series is empty.\nCheck if numeric value is finite\nCheck if float value is infinite\nCheck if float value is NaN (note this is different than …\nCheck if float value is NaN (note this is different than …\nGet a mask of the non-null values.\nGet a mask of the null values.\niterate over <code>Series</code> as <code>AnyValue</code>.\nGet the last element of the <code>Series</code> as a <code>Scalar</code>\nGet length of series.\nTake <code>num_elements</code> from the top as a zero copy view.\nUnpack to <code>ChunkedArray</code> of dtype list\nTODO: Move this somewhere else?\nFor ListArrays, recursively normalizes the offsets to …\nCreate a boolean mask by checking if self &lt; rhs.\nCreate a boolean mask by checking if self &lt;= rhs.\nReturns the maximum value in the array, according to the …\nGet the max of the Series as a new Series of length 1.\nReturns the mean value in the array Returns an option …\nReturns the median value in the array Returns an option …\nGet the median of the Series as a new Series of length 1.\nReturns the minimum value in the array, according to the …\nGet the min of the Series as a new Series of length 1.\nNumber of chunks in this Series\nGet unique values in the Series.\nName of series.\nConstruct a new <code>Series</code> from a collection of <code>AnyValue</code>.\nCreate a new empty Series.\nCreate a new Series filled with values from the given …\nCheck for inequality.\nCreate a boolean mask by checking for inequality.\nCheck for inequality where <code>None == None</code>.\nCreate a boolean mask by checking for inequality.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Null</code>\nCount the null values.\nGet the bitwise OR of the Series as a new Series of length …\nGet the product of an array.\nGet the quantile of the ChunkedArray as a new Series of …\nAggregate all chunks to a contiguous array of memory.\nRename the Series.\nRename series.\nreturn a Series in reversed order\nApply a custom function over a rolling/ moving window of …\nSample a fraction between 0.0-1.0 of this <code>ChunkedArray</code>.\nShift the values by a given period and fill the parts that …\nShrink the capacity of this array to fit its length.\nShrink the capacity of this array to fit its length.\nGet a zero copy view of the data.\nSort the series with specific options.\nGet a zero copy view of the data.\nReturns the std value in the array Returns an option …\nGet the standard deviation of the Series as a new Series …\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::String</code>\nCast throws an error if conversion had overflows\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Struct</code>\nCompute the sum of all values in this Series. Returns …\nGet the sum of the Series as a new Scalar.\nGet the sum of the Series as a new Series of length 1. …\nGet the tail of the Series.\nTake from <code>self</code> at the indexes given by <code>idx</code>.\nTake function that checks of null state in <code>ChunkIdx</code>.\nTake from <code>self</code> at the indexes given by <code>idx</code>.\nTake from <code>self</code> at the indexes given by <code>idx</code>.\nTake from <code>self</code> at the indexes given by <code>idx</code>.\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Time</code>\nConvert a chunk in the Series to the correct Arrow type. …\nCast numerical types to f64, and keep floats as is.\nAttempts to convert a Series to dtype, only allowing …\nConverts a Series to their physical representation, if …\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Array</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Binary</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Binary</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Boolean</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Categorical</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Date</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Datetime</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Decimal</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Duration</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Float32</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Float64</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int16</code>\nUnpack to <code>ChunkedArray</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int64</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Int8</code>\nUnpack to <code>ChunkedArray</code> of dtype list\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Null</code>\nto set the <code>Metadata</code> for the underlying <code>ChunkedArray</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::String</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Struct</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::Time</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt16</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt32</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt64</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt8</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt16</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt32</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt64</code>\nUnpack to <code>ChunkedArray</code> of dtype <code>DataType::UInt8</code>\nGet unique values in the Series.\nCompute the unique elements, but maintain order. This …\nReturns the var value in the array Returns an option …\nGet the variance of the Series as a new Series of length 1.\nReturn this Series with a new name.\nGet the bitwise XOR of the Series as a new Series of …\nCreate a new ChunkedArray with values from self where the …\nA <code>Series</code> that amortizes a few allocations during iteration.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSwaps inner state with the <code>array</code>. Prefer …\nTemporary swaps out the array, and restores the original …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nChecked integer division. Computes self / rhs, returning …\nChecked integer division. Computes self / rhs, returning …\ndrop nulls\nignore nulls\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")