/*!@license
 * Infragistics.Web.ClientUI infragistics.xml.js 15.2.20152.1027
 *
 * Copyright (c) 2011-2015 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends:
 *     jquery-1.4.4.js
 *     jquery.ui.core.js
 *     jquery.ui.widget.js
 *     infragistics.util.js
 */
$.ig = $.ig || {};
(function($) {
    var $$t = {};
    $.ig.$currDefinitions = $$t;
    $.ig.util.bulkDefine(["AsyncCallback:a", "MulticastDelegate:b", "Object:c", "Type:d", "Boolean:e", "ValueType:f", "Void:g", "IConvertible:h", "IFormatProvider:i", "Number:j", "String:k", "IComparable:l", "Number:m", "Number:n", "Number:o", "Number:p", "NumberStyles:q", "Enum:r", "Array:s", "IList:t", "ICollection:u", "IEnumerable:v", "IEnumerator:w", "NotSupportedException:x", "Error:y", "Number:z", "String:aa", "StringComparison:ab", "RegExp:ac", "CultureInfo:ad", "DateTimeFormatInfo:ae", "Calendar:af", "Date:ag", "Number:ah", "DayOfWeek:ai", "DateTimeKind:aj", "CalendarWeekRule:ak", "NumberFormatInfo:al", "CompareInfo:am", "CompareOptions:an", "IEnumerable$1:ao", "IEnumerator$1:ap", "IDisposable:aq", "StringSplitOptions:ar", "Number:as", "Number:at", "Number:au", "Number:av", "Number:aw", "Number:ax", "Assembly:ay", "Stream:az", "SeekOrigin:a0", "RuntimeTypeHandle:a1", "MethodInfo:a2", "MethodBase:a3", "MemberInfo:a4", "ParameterInfo:a5", "TypeCode:a6", "ConstructorInfo:a7", "PropertyInfo:a8", "IntPtr:a9", "IAsyncResult:ba", "WaitHandle:bb", "Buffer:bc", "ArgumentNullException:bd", "NotImplementedException:be", "ArgumentException:bf", "ArgumentOutOfRangeException:bg", "CLSCompliantAttribute:bh", "Attribute:bi", "NullReferenceException:bj", "SystemException:bk", "Locale:bl", "DecoderFallback:bm", "DecoderFallbackBuffer:bn", "DecoderExceptionFallback:bo", "DecoderExceptionFallbackBuffer:bp", "DecoderFallbackException:bq", "DecoderReplacementFallback:br", "DecoderReplacementFallbackBuffer:bs", "DTDObjectModel:bt", "EntityHandling:bu", "Formatting:bv", "GC:bw", "Hashtable:bx", "IDictionary:by", "Dictionary$2:bz", "IDictionary$2:b0", "ICollection$1:b1", "Func$2:b2", "KeyValuePair$2:b3", "Enumerable:b4", "Thread:b5", "ThreadStart:b6", "Func$3:b7", "IList$1:b8", "IOrderedEnumerable$1:b9", "SortedList$1:ca", "List$1:cb", "IArray:cc", "Script:cd", "IArrayList:ce", "Array:cf", "CompareCallback:cg", "Action$1:ch", "Comparer$1:ci", "IComparer:cj", "IComparer$1:ck", "DefaultComparer$1:cl", "IComparable$1:cm", "Comparison$1:cn", "ReadOnlyCollection$1:co", "Predicate$1:cp", "Math:cq", "IEqualityComparer$1:cr", "EqualityComparer$1:cs", "IEqualityComparer:ct", "DefaultEqualityComparer$1:cu", "InvalidOperationException:cv", "IXmlLineInfo:cw", "MarshalByRefObject:cx", "MonoLimitationAttribute:cy", "NamespaceHandling:cz", "XmlNameTable:c0", "NameTable:c1", "NameTable_Entry:c2", "IndexOutOfRangeException:c3", "NewLineHandling:c4", "ObjectDisposedException:c5", "IOPath:c6", "ReadState:c7", "SecurityAction:c8", "SecurityAttribute:c9", "IPermission:da", "CodeAccessSecurityAttribute:db", "SerializableAttribute:dc", "IXmlNamespaceResolver:dd", "XmlNamespaceScope:de", "PermissionSet:df", "PermissionState:dg", "PermissionSetAttribute:dh", "StreamAsyncResult:di", "Monitor:dj", "ManualResetEvent:dk", "EventWaitHandle:dl", "NullStream:dm", "TextWriter:dn", "Encoding:dp", "UTF8Encoding:dq", "Decoder:dr", "UnicodeEncoding:ds", "AsciiEncoding:dt", "DefaultDecoder:du", "Environment:dv", "SynchronizedWriter:dw", "TextWriter_NullTextWriter:dx", "StreamWriter:dy", "StringReader:dz", "TextReader:d0", "SynchronizedReader:d1", "StringWriter:d2", "StringBuilder:d3", "WhitespaceHandling:d4", "WriteState:d5", "XmlChar:d6", "RuntimeHelpers:d7", "RuntimeFieldHandle:d8", "XmlConvert:d9", "XmlException:ea", "FormatException:eb", "FormatException2:ec", "XmlNamespaceManager:ed", "XmlNamespaceManager_NsDecl:ee", "XmlNamespaceManager_NsScope:ef", "XmlParserContext:eg", "XmlSpace:eh", "XmlTextReader:ei", "XmlReader:ej", "XmlNodeType:ek", "XmlTextWriter:el", "XmlWriter:em", "XmlTextWriter_XmlNodeInfo:en", "Array:eo", "XmlTextWriter_XmlDeclState:ep", "XmlTextWriter_StringUtil:eq", "XmlTextReader_XmlTokenInfo:er", "XmlResolver:es", "ICredentials:et", "NetworkCredential:eu", "Uri:ev", "UriKind:ew", "XmlTextReader_DtdInputState:ex", "XmlTextReader_DtdInputStateStack:ey", "XmlTextReader_XmlAttributeTokenInfo:ez", "XmlUrlResolver:e0", "XmlStreamReader:e1", "NonBlockingStreamReader:e2", "XmlInputStream:e3", "XmlTextReader_TagName:e4", "XmlParserContext_ContextItem:e5", "AbstractEnumerable:e6", "Func$1:e7", "AbstractEnumerator:e8", "GenericEnumerable$1:e9", "GenericEnumerator$1:fa"]);
    var $a = $.ig.intDivide,
        $b = $.ig.util.cast,
        $c = $.ig.util.defType,
        $d = $.ig.util.getBoxIfEnum,
        $e = $.ig.util.getDefaultValue,
        $f = $.ig.util.getEnumValue,
        $g = $.ig.util.getValue,
        $h = $.ig.util.intSToU,
        $i = $.ig.util.nullableEquals,
        $j = $.ig.util.nullableIsNull,
        $k = $.ig.util.nullableNotEquals,
        $l = $.ig.util.toNullable,
        $m = $.ig.util.toString$1,
        $n = $.ig.util.u32BitwiseAnd,
        $o = $.ig.util.u32BitwiseOr,
        $p = $.ig.util.u32BitwiseXor,
        $q = $.ig.util.u32LS,
        $r = $.ig.util.unwrapNullable,
        $s = $.ig.util.wrapNullable,
        $t = String.fromCharCode,
        $u = $.ig.util.castObjTo$t,
        $v = $.ig.util.isDigit,
        $w = $.ig.util.isDigit1,
        $x = $.ig.util.isLetter,
        $y = $.ig.util.isNumber,
        $z = $.ig.util.isLetterOrDigit,
        $0 = $.ig.util.isLower,
        $1 = $.ig.util.toLowerCase,
        $2 = $.ig.util.toUpperCase,
        $3 = $.ig.util.compare,
        $4 = $.ig.util.replace,
        $5 = $.ig.util.stringFormat,
        $6 = $.ig.util.stringFormat1,
        $7 = $.ig.util.stringFormat2,
        $8 = $.ig.util.stringCompare1,
        $9 = $.ig.util.stringCompare2,
        $aa = $.ig.util.stringCompare3,
        $ab = $.ig.util.compareSimple,
        $ac = $.ig.util.tryParseNumber,
        $ad = $.ig.util.tryParseNumber1,
        $ae = $.ig.util.numberToString,
        $af = $.ig.util.numberToString1,
        $ag = $.ig.util.parseNumber,
        $ah = $.ig.util.tryParseInt32_1,
        $ai = $.ig.util.tryParseInt32_2,
        $aj = $.ig.util.intToString1,
        $ak = $.ig.util.parseInt32_1,
        $al = $.ig.util.parseInt32_2,
        $am = $.ig.util.intToString,
        $an = $.ig.util.parseUInt8_1,
        $ao = $.ig.util.parseUInt8_2;
    $c("XmlTextWriter_XmlDeclState:ep", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "Allow";
                case 1:
                    return "Ignore";
                case 2:
                    return "Auto";
                case 3:
                    return "Prohibit";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("XmlTextWriter_XmlDeclState", $.ig.$ep.$type)
    }, true);
    $c("XmlTextReader_DtdInputState:ex", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 1:
                    return "Free";
                case 2:
                    return "ElementDecl";
                case 3:
                    return "AttlistDecl";
                case 4:
                    return "EntityDecl";
                case 5:
                    return "NotationDecl";
                case 6:
                    return "PI";
                case 7:
                    return "Comment";
                case 8:
                    return "InsideSingleQuoted";
                case 9:
                    return "InsideDoubleQuoted";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("XmlTextReader_DtdInputState", $.ig.$ep.$type)
    }, true);
    $c("XmlSpace:eh", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "None";
                case 1:
                    return "Default";
                case 2:
                    return "Preserve";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("XmlSpace", $.ig.$ep.$type)
    }, true);
    $c("XmlNamespaceScope:de", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "All";
                case 1:
                    return "ExcludeXml";
                case 2:
                    return "Local";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("XmlNamespaceScope", $.ig.$ep.$type)
    }, true);
    $c("WriteState:d5", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "Start";
                case 1:
                    return "Prolog";
                case 2:
                    return "Element";
                case 3:
                    return "Attribute";
                case 4:
                    return "Content";
                case 5:
                    return "Closed";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("WriteState", $.ig.$ep.$type)
    }, true);
    $c("WhitespaceHandling:d4", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "All";
                case 1:
                    return "Significant";
                case 2:
                    return "None";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("WhitespaceHandling", $.ig.$ep.$type)
    }, true);
    $c("PermissionState:dg", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 1:
                    return "Unrestricted";
                case 0:
                    return "None";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("PermissionState", $.ig.$ep.$type)
    }, true);
    $c("SecurityAction:c8", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 2:
                    return "Demand";
                case 3:
                    return "Assert";
                case 4:
                    return "Deny";
                case 5:
                    return "PermitOnly";
                case 6:
                    return "LinkDemand";
                case 7:
                    return "InheritanceDemand";
                case 8:
                    return "RequestMinimum";
                case 9:
                    return "RequestOptional";
                case 10:
                    return "RequestRefuse";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("SecurityAction", $.ig.$ep.$type)
    }, true);
    $c("ReadState:c7", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "Initial";
                case 1:
                    return "Interactive";
                case 2:
                    return "Error";
                case 3:
                    return "EndOfFile";
                case 4:
                    return "Closed";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("ReadState", $.ig.$ep.$type)
    }, true);
    $c("NewLineHandling:c4", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "Replace";
                case 1:
                    return "Entitize";
                case 2:
                    return "None";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("NewLineHandling", $.ig.$ep.$type)
    }, true);
    $c("NamespaceHandling:cz", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function() {
            function getNameSingle(v) {
                switch (v) {
                    case 0:
                        return "Default";
                    case 1:
                        return "OmitDuplicates";
                    default:
                        return v.toString()
                }
            }
            return function(v) {
                return this.getFlaggedName(v, getNameSingle)
            }
        }(),
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("NamespaceHandling", $.ig.$ep.$type)
    }, true);
    $c("Formatting:bv", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 0:
                    return "None";
                case 1:
                    return "Indented";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("Formatting", $.ig.$ep.$type)
    }, true);
    $c("EntityHandling:bu", "Enum", {
        init: function(v) {
            this._v = v
        },
        $getName: function(v) {
            switch (v) {
                case 1:
                    return "ExpandEntities";
                case 2:
                    return "ExpandCharEntities";
                default:
                    return v.toString()
            }
        },
        $value: function() {
            return this._v
        },
        $type: new $.ig.Type("EntityHandling", $.ig.$ep.$type)
    }, true);
    $c("Buffer:bc", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        b: function(a) {
            try {} catch (b) {}
            if (a == null) {
                throw new $$t.bd(0, "array")
            }
            var c = a.length;
            if (c < 0) {
                throw new $$t.bf(1, "Object must be an array of primitives.")
            }
            return c
        },
        a: function(a, b) {
            if (b < 0 || b >= $$t.$bc.b(a)) {
                throw new $$t.bg(2, "index", "Value must be non-negative and less than the size of the collection.")
            }
            return $g(a[b])
        },
        d: function(a, b, c) {
            if (b < 0 || b >= $$t.$bc.b(a)) {
                throw new $$t.bg(2, "index", "Value must be non-negative and less than the size of the collection.")
            }
            a[b] = c
        },
        c: function(a, b, c, d, e) {
            if (a == null) {
                throw new $$t.bd(0, "src")
            }
            if (c == null) {
                throw new $$t.bd(0, "dst")
            }
            if (b < 0) {
                throw new $$t.bg(2, "srcOffset", "Non-negative number required.")
            }
            if (d < 0) {
                throw new $$t.bg(2, "dstOffset", "Non-negative number required.")
            }
            if (e < 0) {
                throw new $$t.bg(2, "count", "Non-negative number required.")
            }
            if (b > $$t.$bc.b(a) - e || d > $$t.$bc.b(c) - e) {
                throw new $$t.bf(1, "Offset and length were out of bounds for the array or count is greater than " + "the number of elements from index to the end of the source collection.")
            }
            for (var f = 0; f < e; f++) {
                c[d++] = a[b++]
            }
        },
        $type: new $.ig.Type("Buffer", $.ig.$ot)
    }, true);
    $c("CLSCompliantAttribute:bh", "Attribute", {
        init: function(a) {
            $$t.$bi.init.call(this)
        },
        $type: new $.ig.Type("CLSCompliantAttribute", $$t.$bi.$type)
    }, true);
    $c("NullReferenceException:bj", "SystemException", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$bk.init1.call(this, 1, $$t.$bl.a("A null value was found where an object instance was required."))
        },
        init1: function(a, b) {
            $$t.$bk.init1.call(this, 1, b)
        },
        init2: function(a, b, c) {
            $$t.$bk.init2.call(this, 2, b, c)
        },
        $type: new $.ig.Type("NullReferenceException", $$t.$bk.$type)
    }, true);
    $c("DecoderFallback:bm", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        c: function() {
            return $$t.$bm.b
        },
        a: function() {},
        e: function() {
            return $$t.$bm.d
        },
        g: function() {
            return $$t.$bm.f
        },
        h: function() {},
        $type: new $.ig.Type("DecoderFallback", $.ig.$ot)
    }, true);
    $c("DecoderExceptionFallback:bo", "DecoderFallback", {
        init: function() {
            $$t.$bm.init.call(this)
        },
        a: function() {
            return 0
        },
        h: function() {
            return new $$t.bp
        },
        equals: function(a) {
            return $b($$t.$bo.$type, a) !== null
        },
        getHashCode: function() {
            return 0
        },
        $type: new $.ig.Type("DecoderExceptionFallback", $$t.$bm.$type)
    }, true);
    $c("DecoderFallbackBuffer:bn", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        d: function() {},
        a: function(a, b) {},
        c: function() {},
        b: function() {},
        e: function() {},
        $type: new $.ig.Type("DecoderFallbackBuffer", $.ig.$ot)
    }, true);
    $c("DecoderExceptionFallbackBuffer:bp", "DecoderFallbackBuffer", {
        init: function() {
            $$t.$bn.init.call(this)
        },
        d: function() {
            return 0
        },
        a: function(a, b) {
            throw new $$t.bq(3, null, a, b)
        },
        c: function() {
            return $$t.$aa.charMinValue()
        },
        b: function() {
            return false
        },
        $type: new $.ig.Type("DecoderExceptionFallbackBuffer", $$t.$bn.$type)
    }, true);
    $c("DecoderFallbackException:bq", "ArgumentException", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break;
                    case 3:
                        this.init3.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$bq.init1.call(this, 1, null)
        },
        init1: function(a, b) {
            this.e = -1;
            $$t.$bf.init1.call(this, 1, b)
        },
        init2: function(a, b, c) {
            this.e = -1;
            $$t.$bf.init3.call(this, 3, b, c)
        },
        init3: function(a, b, c, d) {
            this.e = -1;
            $$t.$bf.init1.call(this, 1, b);
            this.c = c;
            this.e = d
        },
        c: null,
        e: 0,
        bytesUnknown: function() {
            return this.c
        },
        index: function() {
            return this.e
        },
        $type: new $.ig.Type("DecoderFallbackException", $$t.$bf.$type)
    }, true);
    $c("DecoderReplacementFallback:br", "DecoderFallback", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$br.init1.call(this, 1, "?")
        },
        init1: function(a, b) {
            $$t.$bm.init.call(this);
            if (b == null) {
                throw new $$t.bd(0, "replacement")
            }
            this.j = b
        },
        j: null,
        i: function() {
            return this.j
        },
        a: function() {
            return this.j.length
        },
        h: function() {
            return new $$t.bs(this)
        },
        equals: function(a) {
            var b = $b($$t.$br.$type, a);
            return b != null && this.j == b.j
        },
        getHashCode: function() {
            return this.j.getHashCode()
        },
        $type: new $.ig.Type("DecoderReplacementFallback", $$t.$bm.$type)
    }, true);
    $c("DecoderReplacementFallbackBuffer:bs", "DecoderFallbackBuffer", {
        f: false,
        g: 0,
        h: null,
        init: function(a) {
            $$t.$bn.init.call(this);
            if (a == null) {
                throw new $$t.bd(0, "fallback")
            }
            this.h = a.i();
            this.g = 0
        },
        d: function() {
            return this.f ? this.h.length - this.g : 0
        },
        a: function(a, b) {
            if (a == null) {
                throw new $$t.bd(0, "bytesUnknown")
            }
            if (this.f && this.d() != 0) {
                throw new $$t.bf(1, "Reentrant Fallback method invocation occured. It might be because either this FallbackBuffer is incorrectly shared by multiple threads, invoked inside Encoding recursively, or Reset invocation is forgotten.")
            }
            if (b < 0 || a.length < b) {
                throw new $$t.bg(1, "index")
            }
            this.f = true;
            this.g = 0;
            return this.h.length > 0
        },
        c: function() {
            if (!this.f) {
                return "\0"
            }
            if (this.g >= this.h.length) {
                return $$t.$aa.charMinValue()
            }
            return this.h.charAt(this.g++)
        },
        b: function() {
            if (this.g == 0) {
                return false
            }
            this.g--;
            return true
        },
        e: function() {
            this.f = false;
            this.g = 0
        },
        $type: new $.ig.Type("DecoderReplacementFallbackBuffer", $$t.$bn.$type)
    }, true);
    $c("DTDObjectModel:bt", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        _b: null,
        b: function(a) {
            if (arguments.length === 1) {
                this._b = a;
                return a
            } else {
                return this._b
            }
        },
        _c: null,
        c: function(a) {
            if (arguments.length === 1) {
                this._c = a;
                return a
            } else {
                return this._c
            }
        },
        _d: null,
        d: function(a) {
            if (arguments.length === 1) {
                this._d = a;
                return a
            } else {
                return this._d
            }
        },
        _a: null,
        a: function(a) {
            if (arguments.length === 1) {
                this._a = a;
                return a
            } else {
                return this._a
            }
        },
        $type: new $.ig.Type("DTDObjectModel", $.ig.$ot)
    }, true);
    $c("GC:bw", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        a: function(a) {},
        $type: new $.ig.Type("GC", $.ig.$ot)
    }, true);
    $c("Hashtable:bx", "Object", {
        b: null,
        init: function() {
            this.b = new $$t.bz(String, $.ig.$op.$type, 0);
            $.ig.$op.init.call(this)
        },
        keys: function() {
            return this.b.keys()
        },
        remove: function(a) {
            this.b.remove(a)
        },
        add: function(a, b) {
            this.b.add(a, b)
        },
        contains: function(a) {
            return this.b.containsKey(a)
        },
        item: function(a, b) {
            if (arguments.length === 2) {
                this.b.item(a, b);
                return b
            } else {
                return this.b.item(a)
            }
        },
        $type: new $.ig.Type("Hashtable", $.ig.$ot, [$.ig.IDictionary.prototype.$type])
    }, true);
    $c("IAsyncResult:ba", "Object", {
        $type: new $.ig.Type("IAsyncResult", null)
    }, true);
    $c("IXmlLineInfo:cw", "Object", {
        $type: new $.ig.Type("IXmlLineInfo", null)
    }, true);
    $c("Locale:bl", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        a: function(a) {
            return a
        },
        $type: new $.ig.Type("Locale", $.ig.$ot)
    }, true);
    $c("MarshalByRefObject:cx", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        $type: new $.ig.Type("MarshalByRefObject", $.ig.$ot)
    }, true);
    $c("MonoLimitationAttribute:cy", "Attribute", {
        init: function(a) {
            $$t.$bi.init.call(this)
        },
        $type: new $.ig.Type("MonoLimitationAttribute", $$t.$bi.$type)
    }, true);
    $c("XmlNameTable:c0", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        b: function(a) {},
        a: function(a, b, c) {},
        d: function(a) {},
        c: function(a, b, c) {},
        $type: new $.ig.Type("XmlNameTable", $.ig.$ot)
    }, true);
    $c("NameTable:c1", "XmlNameTable", {
        g: 0,
        e: null,
        i: 0,
        init: function() {
            this.g = 128;
            this.e = new Array(128);
            $$t.$c0.init.call(this)
        },
        a: function(a, b, c) {
            if (0 > b && b >= a.length || 0 > c && c >= a.length - c) {
                throw new $$t.c3(1, "The Index is out of range.")
            }
            if (c == 0) {
                return String.empty()
            }
            var d = 0;
            var e = b + c;
            for (var f = b; f < e; f++) {
                d = (d << 5) - d + a[f].charCodeAt(0)
            }
            d &= 2147483647;
            for (var g = this.e[d % this.g]; g != null; g = g.d) {
                if (g.a == d && g.b == c && $$t.$c1.f(g.c, a, b)) {
                    return g.c
                }
            }
            return this.j($.ig.util.createString3(a, b, c), d)
        },
        b: function(a) {
            if (a == null) {
                throw new $$t.bd(0, "key")
            }
            var b = a.length;
            if (b == 0) {
                return String.empty()
            }
            var c = 0;
            for (var d = 0; d < b; d++) {
                c = (c << 5) - c + a.charAt(d).charCodeAt(0)
            }
            c &= 2147483647;
            for (var e = this.e[c % this.g]; e != null; e = e.d) {
                if (e.a == c && e.b == a.length && e.c == a) {
                    return e.c
                }
            }
            return this.j(a, c)
        },
        c: function(a, b, c) {
            if (0 > b && b >= a.length || 0 > c && c >= a.length - c) {
                throw new $$t.c3(1, "The Index is out of range.")
            }
            if (c == 0) {
                return String.empty()
            }
            var d = 0;
            var e = b + c;
            for (var f = b; f < e; f++) {
                d = (d << 5) - d + a[f].charCodeAt(0)
            }
            d &= 2147483647;
            for (var g = this.e[d % this.g]; g != null; g = g.d) {
                if (g.a == d && g.b == c && $$t.$c1.f(g.c, a, b)) {
                    return g.c
                }
            }
            return null
        },
        d: function(a) {
            if (a == null) {
                throw new $$t.bd(0, "value")
            }
            var b = a.length;
            if (b == 0) {
                return String.empty()
            }
            var c = 0;
            for (var d = 0; d < b; d++) {
                c = (c << 5) - c + a.charAt(d).charCodeAt(0)
            }
            c &= 2147483647;
            for (var e = this.e[c % this.g]; e != null; e = e.d) {
                if (e.a == c && e.b == a.length && e.c == a) {
                    return e.c
                }
            }
            return null
        },
        j: function(a, b) {
            var c = b % this.g;
            this.e[c] = new $$t.c2(a, b, this.e[c]);
            if (this.i++ == this.g) {
                this.g <<= 1;
                var d = this.g - 1;
                var e = new Array(this.g);
                for (var f = 0; f < this.e.length; f++) {
                    var g = this.e[f];
                    var h = g;
                    while (h != null) {
                        var i = h.a & d;
                        var j = h.d;
                        h.d = e[i];
                        e[i] = h;
                        h = j
                    }
                }
                this.e = e
            }
            return a
        },
        f: function(a, b, c) {
            var d = a.length;
            d--;
            c += d;
            do {
                if (a.charAt(d) != b[c]) {
                    return false
                }
                d--;
                c--
            } while (d >= 0);
            return true
        },
        $type: new $.ig.Type("NameTable", $$t.$c0.$type)
    }, true);
    $c("NameTable_Entry:c2", "Object", {
        c: null,
        a: 0,
        b: 0,
        d: null,
        init: function(a, b, c) {
            $.ig.$op.init.call(this);
            this.c = a;
            this.b = a.length;
            this.a = b;
            this.d = c
        },
        $type: new $.ig.Type("NameTable_Entry", $.ig.$ot)
    }, true);
    $c("ObjectDisposedException:c5", "Error", {
        init: function(a, b) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$y.init.call(this, 0)
        },
        init1: function(a, b, c) {
            $$t.$y.init.call(this, 0)
        },
        $type: new $.ig.Type("ObjectDisposedException", $$t.$y.$type)
    }, true);
    $c("IOPath:c6", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        getExtension: function(a) {
            var b = a.lastIndexOf(".");
            if (b < 0) {
                return String.empty()
            }
            return a.substr(b)
        },
        getDirectoryName: function(a) {
            var b = a.lastIndexOfAny(["\\", "/"]);
            if (b < 0) {
                return String.empty()
            }
            return a.substr(0, b)
        },
        getFileName: function(a) {
            var b = a.lastIndexOfAny(["\\", "/"]);
            if (b < 0) {
                return a
            }
            return a.substr(b + 1)
        },
        combine1: function(a, b) {
            if (a == null || a.length == 0) {
                return b
            }
            if (b == null || b.length == 0) {
                return a
            }
            if (a.charAt(a.length - 1) == "\\" || a.charAt(a.length - 1) == "/" || b.charAt(0) == "\\" || b.charAt(0) == "/") {
                return a + b
            }
            return a + "\\" + b
        },
        isPathRooted: function(a) {
            if (a == null) {
                return false
            }
            if (a.length >= 1 && (a.charAt(0) == "/" || a.charAt(0) == "\\")) {
                return true
            }
            if (a.length >= 2 && a.charAt(1) == ":") {
                return true
            }
            return false
        },
        changeExtension: function(a, b) {
            throw new $$t.be(0)
        },
        combine: function(a) {
            throw new $$t.be(0)
        },
        combine2: function(a, b, c) {
            throw new $$t.be(0)
        },
        getFileNameWithoutExtension: function(a) {
            throw new $$t.be(0)
        },
        getFullPath: function(a) {
            throw new $$t.be(0)
        },
        getInvalidPathChars: function() {
            throw new $$t.be(0)
        },
        getPathRoot: function(a) {
            if (a == null) {
                return null
            }
            throw new $$t.be(0)
        },
        getTempFileName: function() {
            throw new $$t.be(0)
        },
        getTempPath: function() {
            throw new $$t.be(0)
        },
        hasExtension: function(a) {
            throw new $$t.be(0)
        },
        $type: new $.ig.Type("IOPath", $.ig.$ot)
    }, true);
    $c("SecurityAttribute:c9", "Attribute", {
        e: 0,
        a: false,
        init: function(a) {
            $$t.$bi.init.call(this);
            this.d(a)
        },
        c: function() {},
        b: function(a) {
            if (arguments.length === 1) {
                this.a = a;
                return a
            } else {
                return this.a
            }
        },
        d: function(a) {
            if (arguments.length === 1) {
                this.e = a;
                return a
            } else {
                return this.e
            }
        },
        $type: new $.ig.Type("SecurityAttribute", $$t.$bi.$type)
    }, true);
    $c("CodeAccessSecurityAttribute:db", "SecurityAttribute", {
        init: function(a) {
            $$t.$c9.init.call(this, a)
        },
        $type: new $.ig.Type("CodeAccessSecurityAttribute", $$t.$c9.$type)
    }, true);
    $c("SerializableAttribute:dc", "Attribute", {
        init: function() {
            $$t.$bi.init.call(this)
        },
        $type: new $.ig.Type("SerializableAttribute", $$t.$bi.$type)
    }, true);
    $c("IPermission:da", "Object", {
        $type: new $.ig.Type("IPermission", null)
    }, true);
    $c("IXmlNamespaceResolver:dd", "Object", {
        $type: new $.ig.Type("IXmlNamespaceResolver", null)
    }, true);
    $c("PermissionSet:df", "Object", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break
                }
                return
            }
            $.ig.$op.init.call(this)
        },
        init1: function(a, b) {
            $.ig.$op.init.call(this)
        },
        init2: function(a, b) {
            $.ig.$op.init.call(this)
        },
        b: function(a) {
            return a
        },
        a: function() {
            return true
        },
        c: function(a) {
            return new $$t.df(0)
        },
        $type: new $.ig.Type("PermissionSet", $.ig.$ot)
    }, true);
    $c("PermissionSetAttribute:dh", "CodeAccessSecurityAttribute", {
        j: null,
        n: null,
        f: false,
        p: null,
        l: null,
        init: function(a) {
            $$t.$db.init.call(this, a)
        },
        k: function(a) {
            if (arguments.length === 1) {
                this.j = a;
                return a
            } else {
                return this.j
            }
        },
        m: function(a) {
            if (arguments.length === 1) {
                this.l = a;
                return a
            } else {
                return this.l
            }
        },
        o: function(a) {
            if (arguments.length === 1) {
                this.n = a;
                return a
            } else {
                return this.n
            }
        },
        g: function(a) {
            if (arguments.length === 1) {
                this.f = a;
                return a
            } else {
                return this.f
            }
        },
        q: function(a) {
            if (arguments.length === 1) {
                this.p = a;
                return a
            } else {
                return this.p
            }
        },
        c: function() {
            return null
        },
        h: function(a) {
            return null
        },
        i: function() {
            var a = null;
            return a
        },
        $type: new $.ig.Type("PermissionSetAttribute", $$t.$db.$type)
    }, true);
    $c("StreamAsyncResult:di", "Object", {
        h: null,
        a: false,
        b: false,
        d: null,
        f: 0,
        i: null,
        init: function(a) {
            this.f = -1;
            $.ig.$op.init.call(this);
            this.h = a
        },
        j: function(a) {
            this.d = a;
            this.a = true;
            if (this.i != null) {
                this.i.d()
            }
        },
        k: function(a, b) {
            this.f = b;
            this.j(a)
        },
        asyncState: function() {
            return this.h
        },
        asyncWaitHandle: function() {
            if (this.i == null) {
                this.i = new $$t.dk(this.a)
            }
            return this.i
        },
        completedSynchronously: function() {
            return true
        },
        isCompleted: function() {
            return this.a
        },
        e: function() {
            return this.d
        },
        g: function() {
            return this.f
        },
        c: function(a) {
            if (arguments.length === 1) {
                this.b = a;
                return a
            } else {
                return this.b
            }
        },
        $type: new $.ig.Type("StreamAsyncResult", $.ig.$ot, [$$t.$ba.$type])
    }, true);
    $c("NullStream:dm", "Stream", {
        init: function() {
            $$t.$az.init.call(this)
        },
        canRead: function() {
            return true
        },
        canSeek: function() {
            return true
        },
        canWrite: function() {
            return true
        },
        length: function() {
            return 0
        },
        position: function(a) {
            if (arguments.length === 1) {
                return a
            } else {
                return 0
            }
        },
        flush: function() {},
        read: function(a, b, c) {
            return 0
        },
        readByte: function() {
            return -1
        },
        seek: function(a, b) {
            return 0
        },
        setLength: function(a) {},
        write: function(a, b, c) {},
        writeByte: function(a) {},
        $type: new $.ig.Type("NullStream", $$t.$az.$type)
    }, true);
    $c("TextWriter:dn", "MarshalByRefObject", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$cx.init.call(this);
            this.a = $.ig.util.toCharArray($$t.$dv.newLine())
        },
        init1: function(a, b) {
            $$t.$cx.init.call(this);
            this.a = $.ig.util.toCharArray($$t.$dv.newLine());
            this.c = b
        },
        a: null,
        c: null,
        h: function() {},
        b: function() {
            return this.c
        },
        g: function(a) {
            if (arguments.length === 1) {
                if (a == null) {
                    a = $$t.$dv.newLine()
                }
                this.a = $.ig.util.toCharArray(a);
                return a
            } else {
                return $.ig.util.createString1(this.a)
            }
        },
        i: function() {
            this.dispose1(true)
        },
        dispose1: function(a) {
            if (a) {
                $$t.$bw.a(this)
            }
        },
        dispose: function() {
            this.dispose1(true);
            $$t.$bw.a(this)
        },
        k: function() {},
        e: function(a) {
            return $$t.$dn.f(a, false)
        },
        f: function(a, b) {
            if (a == null) {
                throw new $$t.bd(0, "writer is null")
            }
            if ($b($$t.$dw.$type, a) !== null) {
                return a
            }
            return new $$t.dw(1, a, b)
        },
        n: function(a) {
            this.v(a.toString())
        },
        o: function(a) {},
        l: function(a) {
            if (a == null) {
                return
            }
            this.m(a, 0, a.length)
        },
        p: function(a) {
            this.v(a.toString1(this.c))
        },
        q: function(a) {
            this.v($ae(a, this.c))
        },
        r: function(a) {
            this.v($ae(a, this.c))
        },
        s: function(a) {
            this.v(a.toString1(this.c))
        },
        t: function(a) {
            if (a != null) {
                this.v(a.toString())
            }
        },
        u: function(a) {
            this.v($ae(a, this.c))
        },
        v: function(a) {
            if (a != null) {
                this.l($.ig.util.toCharArray(a))
            }
        },
        aa: function(a) {
            this.v($am(a, this.c))
        },
        ab: function(a) {
            this.v(a.toString1(this.c))
        },
        x: function(a, b) {
            this.v($5(a, b))
        },
        w: function(a, b) {
            this.v($6(a, b))
        },
        m: function(a, b, c) {
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (b < 0 || b > a.length) {
                throw new $$t.bg(1, "index")
            }
            if (c < 0 || b > a.length - c) {
                throw new $$t.bg(1, "count")
            }
            for (; c > 0; --c, ++b) {
                this.o(a[b])
            }
        },
        y: function(a, b, c) {
            this.v($5(a, b, c))
        },
        z: function(a, b, c, d) {
            this.v($5(a, b, c, d))
        },
        ac: function() {
            this.l(this.a)
        },
        af: function(a) {
            this.n(a);
            this.ac()
        },
        ag: function(a) {
            this.o(a);
            this.ac()
        },
        ad: function(a) {
            this.l(a);
            this.ac()
        },
        ah: function(a) {
            this.p(a);
            this.ac()
        },
        ai: function(a) {
            this.q(a);
            this.ac()
        },
        aj: function(a) {
            this.r(a);
            this.ac()
        },
        ak: function(a) {
            this.s(a);
            this.ac()
        },
        al: function(a) {
            this.t(a);
            this.ac()
        },
        am: function(a) {
            this.u(a);
            this.ac()
        },
        an: function(a) {
            this.v(a);
            this.ac()
        },
        as: function(a) {
            this.aa(a);
            this.ac()
        },
        at: function(a) {
            this.ab(a);
            this.ac()
        },
        ap: function(a, b) {
            this.x(a, b);
            this.ac()
        },
        ao: function(a, b) {
            this.w(a, b);
            this.ac()
        },
        ae: function(a, b, c) {
            this.m(a, b, c);
            this.ac()
        },
        aq: function(a, b, c) {
            this.y(a, b, c);
            this.ac()
        },
        ar: function(a, b, c, d) {
            this.z(a, b, c, d);
            this.ac()
        },
        $type: new $.ig.Type("TextWriter", $$t.$cx.$type, [$$t.$aq.$type])
    }, true);
    $c("TextWriter_NullTextWriter:dx", "TextWriter", {
        init: function() {
            $$t.$dn.init.call(this, 0)
        },
        h: function() {
            return $$t.$dp.defaultValue()
        },
        v: function(a) {},
        o: function(a) {},
        m: function(a, b, c) {},
        $type: new $.ig.Type("TextWriter_NullTextWriter", $$t.$dn.$type)
    }, true);
    $c("StreamWriter:dy", "TextWriter", {
        a8: null,
        a6: null,
        ay: false,
        au: null,
        a0: 0,
        av: null,
        a1: 0,
        ax: false,
        az: false,
        init: function(a, b) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$dy.init2.call(this, 2, b, $$t.$dp.uTF8Unmarked(), 1024)
        },
        init1: function(a, b, c) {
            $$t.$dy.init2.call(this, 2, b, c, 1024)
        },
        bc: function(a, b) {
            this.a8 = a;
            this.a1 = this.a0 = 0;
            var c = Math.max(b, 256);
            this.av = new Array(c);
            this.au = new Array(a.getMaxByteCount(c));
            if (this.a6.canSeek() && this.a6.position() > 0) {
                this.az = true
            }
        },
        init2: function(a, b, c, d) {
            $$t.$dn.init.call(this, 0);
            if (null == b) {
                throw new $$t.bd(0, "stream")
            }
            if (null == c) {
                throw new $$t.bd(0, "encoding")
            }
            if (d <= 0) {
                throw new $$t.bg(1, "bufferSize")
            }
            if (!b.canWrite()) {
                throw new $$t.bf(1, "Can not write to stream")
            }
            this.a6 = b;
            this.bc(c, d)
        },
        aw: function(a) {
            if (arguments.length === 1) {
                this.ay = a;
                if (this.ay) {
                    this.k()
                }
                return a
            } else {
                return this.ay
            }
        },
        a5: function() {
            return this.a6
        },
        h: function() {
            return this.a8
        },
        dispose1: function(a) {
            var b = null;
            if (!this.ax && a && this.a6 != null) {
                try {
                    this.k()
                } catch (c) {
                    b = c
                }
                this.ax = true;
                try {
                    this.a6.close()
                } catch (d) {
                    if (b == null) {
                        b = d
                    }
                }
            }
            this.a6 = null;
            this.au = null;
            this.a8 = null;
            this.av = null;
            if (b != null) {
                throw b
            }
        },
        k: function() {
            if (this.ax) {
                throw new $$t.c5(0, "StreamWriter")
            }
            this.a9();
            if (this.a0 > 0) {
                this.bb();
                this.a6.flush()
            }
        },
        bb: function() {
            if (!this.az && this.a0 > 0) {
                var a = this.a8.getPreamble();
                if (a.length > 0) {
                    this.a6.write(a, 0, a.length)
                }
                this.az = true
            }
            this.a6.write(this.au, 0, this.a0);
            this.a0 = 0
        },
        a9: function() {
            if (this.a0 > 0) {
                this.bb()
            }
            if (this.a1 > 0) {
                var a = this.a8.getBytes2(this.av, 0, this.a1, this.au, this.a0);
                this.a0 += a;
                this.a1 = 0
            }
        },
        m: function(a, b, c) {
            if (this.ax) {
                throw new $$t.c5(0, "StreamWriter")
            }
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (b < 0) {
                throw new $$t.bg(2, "index", "< 0")
            }
            if (c < 0) {
                throw new $$t.bg(2, "count", "< 0")
            }
            if (b > a.length - c) {
                throw new $$t.bf(1, "index + count > buffer.Length")
            }
            this.bd(a, b, c);
            if (this.ay) {
                this.k()
            }
        },
        bd: function(a, b, c) {
            while (c > 0) {
                var d = this.av.length - this.a1;
                if (d == 0) {
                    this.a9();
                    d = this.av.length
                }
                if (d > c) {
                    d = c
                }
                $.ig.util.arrayCopy1(a, b, this.av, this.a1, d);
                c -= d;
                b += d;
                this.a1 += d
            }
        },
        be: function(a) {
            var b = a.length;
            var c = 0;
            while (b > 0) {
                var d = this.av.length - this.a1;
                if (d == 0) {
                    this.a9();
                    d = this.av.length
                }
                if (d > b) {
                    d = b
                }
                for (var e = 0; e < d; e++) {
                    this.av[e + this.a1] = a.charAt(e + c)
                }
                b -= d;
                c += d;
                this.a1 += d
            }
        },
        o: function(a) {
            if (this.ax) {
                throw new $$t.c5(0, "StreamWriter")
            }
            if (this.a1 >= this.av.length) {
                this.a9()
            }
            this.av[this.a1++] = a;
            if (this.ay) {
                this.k()
            }
        },
        l: function(a) {
            if (this.ax) {
                throw new $$t.c5(0, "StreamWriter")
            }
            if (a != null) {
                this.bd(a, 0, a.length)
            }
            if (this.ay) {
                this.k()
            }
        },
        v: function(a) {
            if (this.ax) {
                throw new $$t.c5(0, "StreamWriter")
            }
            if (a != null) {
                this.be(a)
            }
            if (this.ay) {
                this.k()
            }
        },
        i: function() {
            this.dispose1(true)
        },
        $type: new $.ig.Type("StreamWriter", $$t.$dn.$type)
    }, true);
    $c("StringReader:dz", "TextReader", {
        m: null,
        k: 0,
        l: 0,
        init: function(a) {
            $$t.$d0.init.call(this);
            if (a == null) {
                throw new $$t.bd(0, "s")
            }
            this.m = a;
            this.k = 0;
            this.l = a.length
        },
        i: function() {
            this.dispose1(true)
        },
        dispose1: function(a) {
            this.m = null;
            $$t.$d0.dispose1.call(this, a)
        },
        a: function() {
            this.n();
            if (this.k >= this.l) {
                return -1
            } else {
                return this.m.charAt(this.k).charCodeAt(0)
            }
        },
        b: function() {
            this.n();
            if (this.k >= this.l) {
                return -1
            } else {
                return this.m.charAt(this.k++).charCodeAt(0)
            }
        },
        c: function(a, b, c) {
            this.n();
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (a.length - b < c) {
                throw new $$t.bf(1, String.empty())
            }
            if (b < 0 || c < 0) {
                throw new $$t.bg(0)
            }
            var d;
            if (this.k > this.l - c) {
                d = this.l - this.k
            } else {
                d = c
            }
            this.m.copyTo(this.k, a, b, d);
            this.k += d;
            return d
        },
        g: function() {
            this.n();
            if (this.k >= this.m.length) {
                return null
            }
            var a = this.m.indexOf("\r", this.k);
            var b = this.m.indexOf("\n", this.k);
            var c;
            var d = false;
            if (a == -1) {
                if (b == -1) {
                    return this.h()
                }
                c = b
            } else if (b == -1) {
                c = a
            } else {
                c = a > b ? b : a;
                d = a + 1 == b
            }
            var e = this.m.substr(this.k, c - this.k);
            this.k = c + (d ? 2 : 1);
            return e
        },
        h: function() {
            this.n();
            var a = this.m.substr(this.k, this.l - this.k);
            this.k = this.l;
            return a
        },
        n: function() {
            if (this.m == null) {
                throw new $$t.c5(1, "StringReader", "Cannot read from a closed StringReader")
            }
        },
        $type: new $.ig.Type("StringReader", $$t.$d0.$type)
    }, true);
    $c("StringWriter:d2", "TextWriter", {
        aw: null,
        au: false,
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break;
                    case 3:
                        this.init3.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$d2.init2.call(this, 2, new $$t.d3(0))
        },
        init1: function(a, b) {
            $$t.$d2.init3.call(this, 3, new $$t.d3(0), b)
        },
        init2: function(a, b) {
            $$t.$d2.init3.call(this, 3, b, null)
        },
        init3: function(a, b, c) {
            this.au = false;
            $$t.$dn.init.call(this, 0);
            if (b == null) {
                throw new $$t.bd(0, "sb")
            }
            this.aw = b;
            this.c = c
        },
        h: function() {
            return $$t.$dp.unicode()
        },
        i: function() {
            this.dispose1(true);
            this.au = true
        },
        dispose1: function(a) {
            $$t.$dn.dispose1.call(this, a);
            this.au = true
        },
        av: function() {
            return this.aw
        },
        toString: function() {
            return this.aw.toString()
        },
        o: function(a) {
            if (this.au) {
                throw new $$t.c5(1, "StringReader", $$t.$bl.a("Cannot write to a closed StringWriter"))
            }
            this.aw.h(a)
        },
        v: function(a) {
            if (this.au) {
                throw new $$t.c5(1, "StringReader", $$t.$bl.a("Cannot write to a closed StringWriter"))
            }
            this.aw.k(a)
        },
        m: function(a, b, c) {
            if (this.au) {
                throw new $$t.c5(1, "StringReader", $$t.$bl.a("Cannot write to a closed StringWriter"))
            }
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (b < 0) {
                throw new $$t.bg(2, "index", "< 0")
            }
            if (c < 0) {
                throw new $$t.bg(2, "count", "< 0")
            }
            if (b > a.length - c) {
                throw new $$t.bf(1, "index + count > buffer.Length")
            }
            this.aw.g(a, b, c)
        },
        $type: new $.ig.Type("StringWriter", $$t.$dn.$type)
    }, true);
    $c("SynchronizedWriter:dw", "TextWriter", {
        av: null,
        au: false,
        init: function(a, b) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$dw.init1.call(this, 1, b, false)
        },
        init1: function(a, b, c) {
            $$t.$dn.init.call(this, 0);
            this.av = b;
            this.au = c
        },
        i: function() {
            if (this.au) {
                return
            }
            this.av.i()
        },
        k: function() {
            this.av.k()
        },
        n: function(a) {
            this.av.n(a)
        },
        o: function(a) {
            this.av.o(a)
        },
        l: function(a) {
            this.av.l(a)
        },
        p: function(a) {
            this.av.p(a)
        },
        r: function(a) {
            this.av.r(a)
        },
        s: function(a) {
            this.av.s(a)
        },
        t: function(a) {
            this.av.t(a)
        },
        u: function(a) {
            this.av.u(a)
        },
        v: function(a) {
            this.av.v(a)
        },
        aa: function(a) {
            this.av.aa(a)
        },
        ab: function(a) {
            this.av.ab(a)
        },
        x: function(a, b) {
            this.av.x(a, b)
        },
        w: function(a, b) {
            this.av.w(a, b)
        },
        m: function(a, b, c) {
            this.av.m(a, b, c)
        },
        y: function(a, b, c) {
            this.av.y(a, b, c)
        },
        z: function(a, b, c, d) {
            this.av.z(a, b, c, d)
        },
        ac: function() {
            this.av.ac()
        },
        af: function(a) {
            this.av.af(a)
        },
        ag: function(a) {
            this.av.ag(a)
        },
        ad: function(a) {
            this.av.ad(a)
        },
        ah: function(a) {
            this.av.ah(a)
        },
        ai: function(a) {
            this.av.ai(a)
        },
        aj: function(a) {
            this.av.aj(a)
        },
        ak: function(a) {
            this.av.ak(a)
        },
        al: function(a) {
            this.av.al(a)
        },
        am: function(a) {
            this.av.am(a)
        },
        an: function(a) {
            this.av.an(a)
        },
        as: function(a) {
            this.av.as(a)
        },
        at: function(a) {
            this.av.at(a)
        },
        ap: function(a, b) {
            this.av.ap(a, b)
        },
        ao: function(a, b) {
            this.av.ao(a, b)
        },
        ae: function(a, b, c) {
            this.av.ae(a, b, c)
        },
        aq: function(a, b, c) {
            this.av.aq(a, b, c)
        },
        ar: function(a, b, c, d) {
            this.av.ar(a, b, c, d)
        },
        h: function() {
            return this.av.h()
        },
        b: function() {
            return this.av.b()
        },
        g: function(a) {
            if (arguments.length === 1) {
                this.av.g(a);
                return a
            } else {
                return this.av.g()
            }
        },
        $type: new $.ig.Type("SynchronizedWriter", $$t.$dn.$type)
    }, true);
    $c("XmlChar:d6", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        p: function(a) {
            return a == 32 || a == 9 || a == 13 || a == 10
        },
        q: function(a) {
            for (var b = 0; b < a.length; b++) {
                if (!$$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                    return false
                }
            }
            return true
        },
        u: function(a) {
            for (var b = 0; b < a.length; b++) {
                if (!$$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                    return b
                }
            }
            return -1
        },
        e: function(a) {
            if (a >= "a".charCodeAt(0) && a <= "z".charCodeAt(0) || a >= "A".charCodeAt(0) && a <= "Z".charCodeAt(0)) {
                return true
            } else if ($h(a) <= 65535) {
                return $n($$t.$d6.b[($$t.$d6.a[a >> 8] << 3) + ((a & 255) >> 5)], 1 << (a & 31)) != 0
            }
            return false
        },
        n: function(a) {
            return !$$t.$d6.f(a)
        },
        f: function(a) {
            switch (a) {
                case 9:
                case 10:
                case 13:
                    return false
            }
            if (a < 32) {
                return true
            }
            if (a < 55296) {
                return false
            }
            if (a < 57344) {
                return true
            }
            if (a < 65534) {
                return false
            }
            if (a < 65536) {
                return true
            }
            if (a < 1114112) {
                return false
            } else {
                return true
            }
        },
        t: function(a, b) {
            for (var c = 0; c < a.length; c++) {
                if ($$t.$d6.f(a.charAt(c).charCodeAt(0))) {
                    if (!b || c + 1 == a.length || a.charAt(c).charCodeAt(0) < "�".charCodeAt(0) || a.charAt(c).charCodeAt(0) >= "�".charCodeAt(0) || a.charAt(c + 1).charCodeAt(0) < "�".charCodeAt(0) || a.charAt(c + 1).charCodeAt(0) >= "".charCodeAt(0)) {
                        return c
                    }
                    c++
                }
            }
            return -1
        },
        s: function(a, b, c, d) {
            var e = b + c;
            if (a.length < e) {
                throw new $$t.bg(1, "length")
            }
            for (var f = b; f < e; f++) {
                if ($$t.$d6.f(a[f].charCodeAt(0))) {
                    if (!d || f + 1 == e || a[f].charCodeAt(0) < "�".charCodeAt(0) || a[f].charCodeAt(0) >= "�".charCodeAt(0) || a[f + 1].charCodeAt(0) < "�".charCodeAt(0) || a[f + 1].charCodeAt(0) >= "".charCodeAt(0)) {
                        return f
                    }
                    f++
                }
            }
            return -1
        },
        h: function(a) {
            if (a >= "a".charCodeAt(0) && a <= "z".charCodeAt(0) || a >= "A".charCodeAt(0) && a <= "Z".charCodeAt(0)) {
                return true
            } else if ($h(a) <= 65535) {
                return $n($$t.$d6.b[($$t.$d6.c[a >> 8] << 3) + ((a & 255) >> 5)], 1 << (a & 31)) != 0
            } else {
                return false
            }
        },
        j: function(a) {
            var b = false;
            if (a >= 0 && a <= 65535 && a != ":".charCodeAt(0)) {
                b = $n($$t.$d6.b[($$t.$d6.c[a >> 8] << 3) + ((a & 255) >> 5)], 1 << (a & 31)) != 0
            }
            return b
        },
        g: function(a) {
            if (a.length == 0) {
                return false
            }
            if (!$$t.$d6.e(a.charAt(0).charCodeAt(0))) {
                return false
            }
            for (var b = 1; b < a.length; b++) {
                if (!$$t.$d6.h(a.charAt(b).charCodeAt(0))) {
                    return false
                }
            }
            return true
        },
        i: function(a) {
            if (a.length == 0) {
                return false
            }
            if (!$$t.$d6.e(a.charAt(0).charCodeAt(0))) {
                return false
            }
            for (var b = 0; b < a.length; b++) {
                if (!$$t.$d6.j(a.charAt(b).charCodeAt(0))) {
                    return false
                }
            }
            return true
        },
        k: function(a) {
            if (a.length == 0) {
                return false
            }
            for (var b = 0; b < a.length; b++) {
                if (!$$t.$d6.h(a.charAt(b).charCodeAt(0))) {
                    return false
                }
            }
            return true
        },
        m: function(a) {
            return ($$t.$d6.p(a) && a != "	".charCodeAt(0)) | ("a".charCodeAt(0) <= a && a <= "z".charCodeAt(0)) | ("A".charCodeAt(0) <= a && a <= "Z".charCodeAt(0)) | ("0".charCodeAt(0) <= a && a <= "9".charCodeAt(0)) | "-'()+,./:=?;!*#@$_%".indexOf($t(a)) >= 0
        },
        l: function(a) {
            for (var b = 0; b < a.length; b++) {
                if (!$$t.$d6.m(a.charAt(b).charCodeAt(0))) {
                    return false
                }
            }
            return true
        },
        o: function(a) {
            if (a != null) {
                var b = a.length;
                if (b > 0) {
                    var c = a.charAt(0);
                    if (c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <= "Z".charCodeAt(0) || c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0)) {
                        for (var d = 1; d < b; d++) {
                            c = a.charAt(d);
                            if ((c.charCodeAt(0) < "A".charCodeAt(0) || c.charCodeAt(0) > "Z".charCodeAt(0)) && (c.charCodeAt(0) < "a".charCodeAt(0) || c.charCodeAt(0) > "z".charCodeAt(0)) && (c.charCodeAt(0) < "0".charCodeAt(0) || c.charCodeAt(0) > "9".charCodeAt(0)) && c != "." && c != "_" && c != "-") {
                                return false
                            }
                        }
                        return true
                    }
                }
            }
            return false
        },
        r: function(a) {
            switch (a) {
                case "amp":
                    return "&".charCodeAt(0);
                case "lt":
                    return "<".charCodeAt(0);
                case "gt":
                    return ">".charCodeAt(0);
                case "quot":
                    return '"'.charCodeAt(0);
                case "apos":
                    return "'".charCodeAt(0);
                default:
                    return -1
            }
        },
        $type: new $.ig.Type("XmlChar", $.ig.$ot)
    }, true);
    $c("XmlConvert:d9", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        ap: function(a) {
            if (a == null || a.length < 6) {
                return a
            }
            var b = "�";
            try {
                b = $t($al(a.substr(1, 4), 515, $$t.$ad.invariantCulture()))
            } catch (c) {
                return a.charAt(0) + $$t.$d9.s(a.substr(1))
            }
            if (a.length == 6) {
                return b.toString()
            }
            return b + $$t.$d9.s(a.substr(6))
        },
        s: function(a) {
            if (a == null || a.length == 0) {
                return a
            }
            var b = a.indexOf("_");
            if (b == -1 || b + 6 >= a.length) {
                return a
            }
            if (a.charAt(b + 1) != "X" && a.charAt(b + 1) != "x" || a.charAt(b + 6) != "_") {
                return a.charAt(0) + $$t.$d9.s(a.substr(1))
            }
            return a.substr(0, b) + $$t.$d9.ap(a.substr(b + 1))
        },
        u: function(a) {
            if (a == null) {
                return a
            }
            var b = $$t.$d9.v(a);
            var c = b.indexOf(":");
            if (c == -1) {
                return b
            }
            return $4(b, ":", "_x003A_")
        },
        c: function(a, b) {
            if (a == ":") {
                return false
            }
            if (b) {
                return !$$t.$d6.e(a.charCodeAt(0))
            } else {
                return !$$t.$d6.h(a.charCodeAt(0))
            }
        },
        w: function(a, b) {
            if (a == null || a.length == 0) {
                return a
            }
            var c = new $$t.d3(0);
            var d = a.length;
            for (var e = 0; e < d; e++) {
                var f = a.charAt(e);
                if ($$t.$d9.c(f, e == 0 && !b)) {
                    c.p("_x{0:X4}_", f.charCodeAt(0))
                } else if (f == "_" && e + 6 < d && a.charAt(e + 1) == "x" && a.charAt(e + 6) == "_") {
                    c.k("_x005F_")
                } else {
                    c.h(f)
                }
            }
            return c.toString()
        },
        v: function(a) {
            return $$t.$d9.w(a, false)
        },
        x: function(a) {
            if (a == String.empty()) {
                throw new $$t.ea(3, "Invalid NmToken: ''")
            }
            return $$t.$d9.w(a, true)
        },
        d: function(a) {
            a = a.trim($$t.$d6.d);
            switch (a) {
                case "1":
                    return true;
                case "true":
                    return true;
                case "0":
                    return false;
                case "false":
                    return false;
                default:
                    throw new $$t.eb(1, a + " is not a valid boolean value")
            }
        },
        y: function(a) {
            var b = new $$t.d2(0);
            $$t.$d9.ay(a, 0, a.length, b);
            return b.toString()
        },
        ay: function(a, b, c, d) {
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (b < 0) {
                throw new $$t.bg(3, "index", b, "index must be non negative integer.")
            }
            if (c < 0) {
                throw new $$t.bg(3, "count", c, "count must be non negative integer.")
            }
            if (a.length < b + c) {
                throw new $$t.bg(1, "index and count must be smaller than the length of the buffer.")
            }
            var e = b + c;
            for (var f = b; f < e; f++) {
                var g = a[f];
                var h = g >> 4;
                var i = g & 15;
                if (h > 9) {
                    d.o($t(h + 55))
                } else {
                    d.o($t(h + 48))
                }
                if (i > 9) {
                    d.o($t(i + 55))
                } else {
                    d.o($t(i + 48))
                }
            }
        },
        f: function(a) {
            return $ao(a, 7, $$t.$ad.invariantCulture())
        },
        g: function(a) {
            return $$t.$aa.parse(a)
        },
        h: function(a) {
            return $.ig.util.parseNumber(a, $$t.$ad.invariantCulture())
        },
        i: function(a) {
            if (a == null) {
                throw new $$t.bd(1)
            }
            var b = $$t.$d9.r(a);
            if (b != 0) {
                return b
            }
            return Number.parse(a, 423, $$t.$ad.invariantCulture())
        },
        r: function(a) {
            var b = 0;
            while (b < a.length && /\s/i.test(a.charAt(b))) {
                b++
            }
            if (b == a.length) {
                throw new $$t.eb(0)
            }
            var c = a.length - 1;
            while (/\s/i.test(a.charAt(c))) {
                c--
            }
            if ($$t.$d9.e("NaN", a, b, c)) {
                return NaN
            }
            if ($$t.$d9.e("INF", a, b, c)) {
                return 0
            }
            if ($$t.$d9.e("-INF", a, b, c)) {
                return 0
            }
            if ($$t.$d9.e("Infinity", a, b, c)) {
                return 0
            }
            if ($$t.$d9.e("-Infinity", a, b, c)) {
                return 0
            }
            return 0
        },
        e: function(a, b, c, d) {
            return d - c + 1 == a.length && String.compareOrdinal(a, 0, b, c, a.length) == 0
        },
        l: function(a) {
            return $.ig.util.parseInt16_2(a, 7, $$t.$ad.invariantCulture())
        },
        n: function(a) {
            return $al(a, 7, $$t.$ad.invariantCulture())
        },
        o: function(a) {
            return $.ig.util.parseInt64_2(a, 7, $$t.$ad.invariantCulture())
        },
        p: function(a) {
            return $.ig.util.parseInt8_2(a, 7, $$t.$ad.invariantCulture())
        },
        q: function(a) {
            if (a == null) {
                throw new $$t.bd(1)
            }
            var b = $$t.$d9.r(a);
            if (b != 0) {
                return b
            }
            return $.ig.Number.prototype.parse2(a, 423, $$t.$ad.invariantCulture())
        },
        ah: function(a) {
            return a.toString()
        },
        ag: function(a) {
            return a.toString()
        },
        aa: function(a) {
            return a.toString()
        },
        ai: function(a) {
            return a.toString()
        },
        ab: function(a) {
            return a.toString2($$t.$ad.invariantCulture())
        },
        z: function(a) {
            if (a) {
                return "true"
            }
            return "false"
        },
        aj: function(a) {
            return a.toString()
        },
        ae: function(a) {
            return a.toString1($$t.$ad.invariantCulture())
        },
        ao: function(a) {
            return a.toString()
        },
        al: function(a) {
            if (a == 0) {
                return "PT0S"
            }
            var b = new $$t.d3(0);
            if ($.ig.util.timeSpanTicks(a) < 0) {
                if (a == $$t.$ah.minValue()) {
                    return "-P10675199DT2H48M5.4775808S"
                }
                b.h("-");
                a = $.ig.util.timeSpanNegate(a)
            }
            b.h("P");
            if ($.ig.util.timeSpanDays(a) > 0) {
                b.i($.ig.util.timeSpanDays(a)).h("D")
            }
            var c = $.ig.util.timeSpanTicks(a) % 1e4($$t.$ah);
            if ($.ig.util.timeSpanDays(a) > 0 || $.ig.util.timeSpanHours(a) > 0 || $.ig.util.timeSpanMinutes(a) > 0 || $.ig.util.timeSpanSeconds(a) > 0 || $.ig.util.timeSpanMilliseconds(a) > 0 || c > 0) {
                b.h("T");
                if ($.ig.util.timeSpanHours(a) > 0) {
                    b.i($.ig.util.timeSpanHours(a)).h("H")
                }
                if ($.ig.util.timeSpanMinutes(a) > 0) {
                    b.i($.ig.util.timeSpanMinutes(a)).h("M")
                }
                if ($.ig.util.timeSpanSeconds(a) > 0 || $.ig.util.timeSpanMilliseconds(a) > 0 || c > 0) {
                    b.i($.ig.util.timeSpanSeconds(a));
                    var d = true;
                    if (c > 0) {
                        b.h(".").p("{0:0000000}", $.ig.util.timeSpanTicks(a) % 1e7($$t.$ah))
                    } else if ($.ig.util.timeSpanMilliseconds(a) > 0) {
                        b.h(".").p("{0:000}", $.ig.util.timeSpanMilliseconds(a))
                    } else {
                        d = false
                    }
                    if (d) {
                        while (b.item(b.c() - 1) == "0") {
                            b.x(b.c() - 1, 1)
                        }
                    }
                    b.h("S")
                }
            }
            return b.toString()
        },
        af: function(a) {
            if ($.ig.util.isNegativeInfinity(a)) {
                return "-INF"
            }
            if ($.ig.util.isPositiveInfinity(a)) {
                return "INF"
            }
            if ($.ig.util.isNaN(a)) {
                return "NaN"
            }
            return a.toString()
        },
        ak: function(a) {
            if ($.ig.Number.prototype.isNegativeInfinity(a)) {
                return "-INF"
            }
            if ($.ig.Number.prototype.isPositiveInfinity(a)) {
                return "INF"
            }
            if (isNaN(a)) {
                return "NaN"
            }
            return a.toString()
        },
        an: function(a) {
            return a.toString()
        },
        am: function(a) {
            return a.toString()
        },
        ac: function(a) {
            return $.ig.Date.prototype.toStringFormat(a, "yyyy-MM-ddTHH:mm:ss.fffffffzzz", $$t.$ad.invariantCulture())
        },
        ad: function(a, b) {
            return $.ig.Date.prototype.toStringFormat(a, b, $$t.$ad.invariantCulture())
        },
        au: function(a) {
            a = a.trim($$t.$d6.d);
            if (a.length == 0) {
                throw new $$t.eb(1, "Invalid format string for duration schema datatype.")
            }
            var b = 0;
            if (a.charAt(0) == "-") {
                b = 1
            }
            var c = b == 1;
            if (a.charAt(b) != "P") {
                throw new $$t.eb(1, "Invalid format string for duration schema datatype.")
            }
            b++;
            var d = 0;
            var e = 0;
            var f = false;
            var g = 0;
            var h = 0;
            var i = 0;
            var j = 0;
            var k = 0;
            var l = false;
            var m = b;
            while (m < a.length) {
                if (a.charAt(m) == "T") {
                    f = true;
                    d = 4;
                    m++;
                    b = m;
                    continue
                }
                for (; m < a.length; m++) {
                    if (a.charAt(m).charCodeAt(0) < "0".charCodeAt(0) || "9".charCodeAt(0) < a.charAt(m).charCodeAt(0)) {
                        break
                    }
                }
                if (d == 7) {
                    k = m - b
                }
                var n = $ak(a.substr(b, m - b), $$t.$ad.invariantCulture());
                if (d == 7) {
                    for (; k > 7; k--) {
                        n = $a(n, 10)
                    }
                    for (; k < 7; k++) {
                        n *= 10
                    }
                }
                switch (a.charAt(m)) {
                    case "Y":
                        e += n * 365;
                        if (d > 0) {
                            l = true
                        } else {
                            d = 1
                        }
                        break;
                    case "M":
                        if (d < 2) {
                            e += 365 * $a(n, 12) + 30 * (n % 12);
                            d = 2
                        } else if (f && d < 6) {
                            h = n;
                            d = 6
                        } else {
                            l = true
                        }
                        break;
                    case "D":
                        e += n;
                        if (d > 2) {
                            l = true
                        } else {
                            d = 3
                        }
                        break;
                    case "H":
                        g = n;
                        if (!f || d > 4) {
                            l = true
                        } else {
                            d = 5
                        }
                        break;
                    case "S":
                        if (d == 7) {
                            j = n
                        } else {
                            i = n
                        }
                        if (!f || d > 7) {
                            l = true
                        } else {
                            d = 8
                        }
                        break;
                    case ".":
                        if (d > 7) {
                            l = true
                        }
                        i = n;
                        d = 7;
                        break;
                    default:
                        l = true;
                        break
                }
                if (l) {
                    break
                }++m;
                b = m
            }
            if (l) {
                throw new $$t.eb(1, "Invalid format string for duration schema datatype.")
            }
            var o = $.ig.util.timeSpanInit3(e, g, h, i);
            if (c) {
                return $.ig.util.timeSpanFromTicks(-($.ig.util.timeSpanTicks(o) + j))
            } else {
                return $.ig.util.timeSpanFromTicks($.ig.util.timeSpanTicks(o) + j)
            }
        },
        av: function(a) {
            return $.ig.util.parseUInt16_2(a, 7, $$t.$ad.invariantCulture())
        },
        aw: function(a) {
            return $.ig.util.parseUInt32_2(a, 7, $$t.$ad.invariantCulture())
        },
        ax: function(a) {
            return $.ig.util.parseUInt64_2(a, 7, $$t.$ad.invariantCulture())
        },
        aq: function(a) {
            if (a == null || a.length == 0) {
                throw new $$t.bd(0, "name")
            }
            if (!$$t.$d6.g(a)) {
                throw new $$t.ea(3, "'" + a + "' is not a valid XML Name")
            }
            return a
        },
        ar: function(a) {
            if (a == null || a.length == 0) {
                throw new $$t.bd(0, "ncname")
            }
            if (!$$t.$d6.i(a)) {
                throw new $$t.ea(3, "'" + a + "' is not a valid XML NCName")
            }
            return a
        },
        at: function(a) {
            if (a == null) {
                throw new $$t.bd(0, "name")
            }
            if (a.length == 0) {
                return a
            }
            if ($$t.$d6.p(a.charAt(0).charCodeAt(0)) || $$t.$d6.p(a.charAt(a.length - 1).charCodeAt(0))) {
                throw new $$t.ea(3, "Whitespace characters (#xA, #xD, #x9, #x20) are not allowed as leading or trailing whitespaces of xs:token.")
            }
            for (var b = 0; b < a.length; b++) {
                if ($$t.$d6.p(a.charAt(b).charCodeAt(0)) && a.charAt(b) != " ") {
                    throw new $$t.ea(3, "Either #xA, #xD or #x9 are not allowed inside xs:token.")
                }
            }
            return a
        },
        as: function(a) {
            if (a == null) {
                throw new $$t.bd(0, "name")
            }
            if (!$$t.$d6.k(a)) {
                throw new $$t.ea(3, "'" + a + "' is not a valid XML NMTOKEN")
            }
            return a
        },
        b: function(a) {
            var b = $.ig.util.toCharArray(a);
            var c = new Array($a(b.length, 2) + b.length % 2);
            $$t.$d9.m(b, 0, b.length, c);
            return c
        },
        m: function(a, b, c, d) {
            var e = b;
            for (var f = 0; f < c - 1; f += 2) {
                d[e] = a[f].charCodeAt(0) > "9".charCodeAt(0) ? a[f].charCodeAt(0) - "A".charCodeAt(0) + 10 : a[f].charCodeAt(0) - "0".charCodeAt(0);
                d[e] <<= 4;
                d[e] += a[f + 1].charCodeAt(0) > "9".charCodeAt(0) ? a[f + 1].charCodeAt(0) - "A".charCodeAt(0) + 10 : a[f + 1].charCodeAt(0) - "0".charCodeAt(0);
                e++
            }
            if (c % 2 != 0) {
                d[e++] = (a[c - 1].charCodeAt(0) > "9".charCodeAt(0) ? a[c - 1].charCodeAt(0) - "A".charCodeAt(0) + 10 : a[c - 1].charCodeAt(0) - "0".charCodeAt(0)) << 4
            }
            return e - b
        },
        $type: new $.ig.Type("XmlConvert", $.ig.$ot)
    }, true);
    $c("FormatException2:ec", "Error", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$y.init1.call(this, 1, $$t.$bl.a("Invalid format."));
            this.hResult(-2146233033)
        },
        init1: function(a, b) {
            $$t.$y.init1.call(this, 1, b);
            this.hResult(-2146233033)
        },
        init2: function(a, b, c) {
            $$t.$y.init2.call(this, 2, b, c);
            this.hResult(-2146233033)
        },
        _hResult: 0,
        hResult: function(a) {
            if (arguments.length === 1) {
                this._hResult = a;
                return a
            } else {
                return this._hResult
            }
        },
        $type: new $.ig.Type("FormatException2", $$t.$y.$type)
    }, true);
    $c("XmlException:ea", "Error", {
        d: 0,
        f: 0,
        i: null,
        h: null,
        c: null,
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break;
                    case 3:
                        this.init3.apply(this, arguments);
                        break;
                    case 4:
                        this.init4.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$y.init.call(this, 0);
            this.h = "Xml_DefaultException";
            this.c = new Array(1)
        },
        init1: function(a, b, c) {
            $$t.$y.init2.call(this, 2, b, c);
            this.h = "Xml_UserException";
            this.c = [b]
        },
        init2: function(a, b, c, d) {
            $$t.$y.init.call(this, 0)
        },
        init3: function(a, b) {
            $$t.$y.init1.call(this, 1, b);
            this.h = "Xml_UserException";
            this.c = [b]
        },
        init4: function(a, b, c, d, e) {
            $$t.$ea.init1.call(this, 1, b, c);
            this.d = d;
            this.f = e
        },
        lineNumber: function() {
            return this.d
        },
        linePosition: function() {
            return this.f
        },
        $type: new $.ig.Type("XmlException", $$t.$y.$type)
    }, true);
    $c("XmlNamespaceManager:ed", "Object", {
        a: null,
        k: 0,
        b: null,
        l: 0,
        m: null,
        j: 0,
        ab: function() {
            this.a = new Array(10);
            this.b = new Array(40);
            for (var a = 0; a < this.a.length; a++) {
                this.a[a] = new $$t.ee
            }
            for (var b = 0; b < this.b.length; b++) {
                this.b[b] = new $$t.ef
            }
        },
        z: function() {
            var a = this.a;
            this.a = new Array(this.k * 2 + 1);
            if (this.k > 0) {
                $.ig.util.arrayCopy1(a, 0, this.a, 0, this.k)
            }
        },
        aa: function() {
            var a = this.b;
            this.b = new Array(this.l * 2 + 1);
            if (this.l > 0) {
                $.ig.util.arrayCopy1(a, 0, this.b, 0, this.l)
            }
        },
        af: null,
        f: false,
        init: function(a) {
            this.k = -1;
            this.l = -1;
            $.ig.$op.init.call(this);
            if (a == null) {
                throw new $$t.bd(0, "nameTable")
            }
            this.af = a;
            a.b("xmlns");
            a.b("xml");
            a.b(String.empty());
            a.b("http://www.w3.org/2000/xmlns/");
            a.b("http://www.w3.org/XML/1998/namespace");
            this.ab()
        },
        defaultNamespace: function() {
            return this.m == null ? String.empty() : this.m
        },
        nameTable: function() {
            return this.af
        },
        addNamespace: function(a, b) {
            this.y(a, b, false)
        },
        y: function(a, b, c) {
            if (a == null) {
                throw new $$t.bd(0, "prefix Value cannot be null.")
            }
            if (b == null) {
                throw new $$t.bd(0, "uri Value cannot be null.")
            }
            if (!c) {
                a = this.af.b(a);
                b = this.af.b(b)
            }
            if (a == "xml" && b == "http://www.w3.org/XML/1998/namespace") {
                return
            }
            $$t.$ed.o(a, b, true);
            if (a.length == 0) {
                this.m = b
            }
            for (var d = this.k; d > this.k - this.j; d--) {
                if ($.ig.$op.referenceEquals(this.a[d].a, a)) {
                    this.a[d].b = b;
                    return
                }
            }
            this.k++;
            this.j++;
            if (this.k == this.a.length) {
                this.z()
            }
            this.a[this.k].a = a;
            this.a[this.k].b = b
        },
        o: function(a, b, c) {
            var d = null;
            if (a == "xml" && b != "http://www.w3.org/XML/1998/namespace") {
                d = $5('Prefix "xml" can only be bound to the fixed namespace URI "{0}". "{1}" is invalid.', "http://www.w3.org/XML/1998/namespace", b)
            } else if (d == null && a == "xmlns") {
                d = 'Declaring prefix named "xmlns" is not allowed to any namespace.'
            } else if (d == null && b == "http://www.w3.org/2000/xmlns/") {
                d = $5('Namespace URI "{0}" cannot be declared with any namespace.', "http://www.w3.org/2000/xmlns/")
            }
            if (d != null && c) {
                throw new $$t.bf(1, d)
            } else {
                return d
            }
        },
        getEnumerator: function() {
            var a = new $$t.bx;
            for (var b = 0; b <= this.k; b++) {
                if (this.a[b].a != String.empty() && this.a[b].b != null) {
                    a.item(this.a[b].a, this.a[b].b)
                }
            }
            a.item(String.empty(), this.defaultNamespace());
            a.item("xml", "http://www.w3.org/XML/1998/namespace");
            a.item("xmlns", "http://www.w3.org/2000/xmlns/");
            return a.keys().getEnumerator()
        },
        getNamespacesInScope: function(a) {
            return this.i(a)
        },
        i: function(a) {
            var b = new $$t.bx;
            if (a == 2) {
                for (var c = 0; c < this.j; c++) {
                    if (this.a[this.k - c].a == String.empty() && this.a[this.k - c].b == String.empty()) {
                        if (b.contains(String.empty())) {
                            b.remove(String.empty())
                        }
                    } else if (this.a[this.k - c].b != null) {
                        b.add(this.a[this.k - c].a, this.a[this.k - c].b)
                    }
                }
                return b
            } else {
                for (var d = 0; d <= this.k; d++) {
                    if (this.a[d].a == String.empty() && this.a[d].b == String.empty()) {
                        if (b.contains(String.empty())) {
                            b.remove(String.empty())
                        }
                    } else if (this.a[d].b != null) {
                        b.item(this.a[d].a, this.a[d].b)
                    }
                }
                if (a == 0) {
                    b.add("xml", "http://www.w3.org/XML/1998/namespace")
                }
                return b
            }
        },
        hasNamespace: function(a) {
            return this.e(a, false)
        },
        e: function(a, b) {
            if (a == null || this.j == 0) {
                return false
            }
            for (var c = this.k; c > this.k - this.j; c--) {
                if (this.a[c].a == a) {
                    return true
                }
            }
            return false
        },
        lookupNamespace: function(a) {
            switch (a) {
                case "xmlns":
                    return this.af.d("http://www.w3.org/2000/xmlns/");
                case "xml":
                    return this.af.d("http://www.w3.org/XML/1998/namespace");
                case "":
                    return this.defaultNamespace();
                case null:
                    return null
            }
            for (var b = this.k; b >= 0; b--) {
                if (this.c(this.a[b].a, a, this.f) && this.a[b].b != null) {
                    return this.a[b].b
                }
            }
            return null
        },
        lookupNamespace1: function(a, b) {
            this.f = b;
            var c = this.lookupNamespace(a);
            this.f = false;
            return c
        },
        lookupPrefix: function(a) {
            return this.lookupPrefix1(a, true)
        },
        c: function(a, b, c) {
            if (c) {
                return $.ig.$op.referenceEquals(a, b)
            } else {
                return a == b
            }
        },
        lookupPrefix1: function(a, b) {
            return this.r(a, b, false)
        },
        s: function(a, b) {
            return this.r(a, b, true)
        },
        r: function(a, b, c) {
            if (a == null) {
                return null
            }
            if (this.c(a, this.defaultNamespace(), b)) {
                return String.empty()
            }
            if (this.c(a, "http://www.w3.org/XML/1998/namespace", b)) {
                return "xml"
            }
            if (this.c(a, "http://www.w3.org/2000/xmlns/", b)) {
                return "xmlns"
            }
            for (var d = this.k; d >= 0; d--) {
                if (this.c(this.a[d].b, a, b) && this.a[d].a.length > 0) {
                    if (!c || !this.g(d)) {
                        return this.a[d].a
                    }
                }
            }
            return null
        },
        g: function(a) {
            if (a == this.k) {
                return false
            }
            var b = this.a[a + 1].a;
            for (var c = a + 1; c <= this.k; c++) {
                if (this.a[a].a == b) {
                    return true
                }
            }
            return false
        },
        popScope: function() {
            if (this.l == -1) {
                return false
            }
            this.k -= this.j;
            this.m = this.b[this.l].b;
            this.j = this.b[this.l].a;
            this.l--;
            return true
        },
        pushScope: function() {
            this.l++;
            if (this.l == this.b.length) {
                this.aa()
            }
            this.b[this.l].b = this.m;
            this.b[this.l].a = this.j;
            this.j = 0
        },
        removeNamespace: function(a, b) {
            this.ae(a, b, false)
        },
        ae: function(a, b, c) {
            if (a == null) {
                throw new $$t.bd(0, "prefix")
            }
            if (b == null) {
                throw new $$t.bd(0, "uri")
            }
            if (this.j == 0) {
                return
            }
            for (var d = this.k; d > this.k - this.j; d--) {
                if (this.c(this.a[d].a, a, c) && this.c(this.a[d].b, b, c)) {
                    this.a[d].b = null
                }
            }
        },
        $type: new $.ig.Type("XmlNamespaceManager", $.ig.$ot, [$$t.$dd.$type, $.ig.IEnumerable.prototype.$type])
    }, true);
    $c("XmlNamespaceManager_NsDecl:ee", "ValueType", {
        init: function() {
            $.ig.ValueType.prototype.init.call(this)
        },
        a: null,
        b: null,
        $type: new $.ig.Type("XmlNamespaceManager_NsDecl", $.ig.ValueType.prototype.$type)
    }, true);
    $c("XmlNamespaceManager_NsScope:ef", "ValueType", {
        init: function() {
            $.ig.ValueType.prototype.init.call(this)
        },
        a: 0,
        b: null,
        $type: new $.ig.Type("XmlNamespaceManager_NsScope", $.ig.ValueType.prototype.$type)
    }, true);
    $c("XmlParserContext:eg", "Object", {
        init: function(a, b, c, d, e) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break;
                    case 3:
                        this.init3.apply(this, arguments);
                        break;
                    case 4:
                        this.init4.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$eg.init3.call(this, 3, b, c, null, null, null, null, null, d, e, null)
        },
        init1: function(a, b, c, d, e, f) {
            $$t.$eg.init3.call(this, 3, b, c, null, null, null, null, null, d, e, f)
        },
        init2: function(a, b, c, d, e, f, g, h, i, j) {
            $$t.$eg.init3.call(this, 3, b, c, d, e, f, g, h, i, j, null)
        },
        init3: function(a, b, c, d, e, f, g, h, i, j, k) {
            $$t.$eg.init4.call(this, 4, b, c, d != null && d != String.empty() ? new $$t.ei(9, $$t.$d0.e, b).d8(d, e, f, g) : null, h, i, j, k)
        },
        init4: function(a, b, c, d, e, f, g, h) {
            this.c = String.empty();
            this.e = String.empty();
            this.g = String.empty();
            this.i = String.empty();
            this.k = String.empty();
            this.m = String.empty();
            $.ig.$op.init.call(this);
            this.u = c;
            this.w = b != null ? b : c != null ? c.nameTable() : null;
            if (d != null) {
                this.f(d.b());
                this.j(d.c());
                this.l(d.d());
                this.h(d.a());
                this.s = d
            }
            this.o = h;
            this.d(e);
            this.n(f);
            this.y = g;
            this.a = new $.ig.Array
        },
        c: null,
        e: null,
        o: null,
        g: null,
        u: null,
        w: null,
        i: null,
        k: null,
        m: null,
        y: 0,
        a: null,
        b: 0,
        s: null,
        d: function(a) {
            if (arguments.length === 1) {
                this.c = a != null ? a : String.empty();
                return a
            } else {
                return this.c
            }
        },
        f: function(a) {
            if (arguments.length === 1) {
                this.e = a != null ? a : String.empty();
                return a
            } else {
                return this.e != null ? this.e : this.s != null ? this.s.b() : null
            }
        },
        t: function(a) {
            if (arguments.length === 1) {
                this.s = a;
                return a
            } else {
                return this.s
            }
        },
        p: function(a) {
            if (arguments.length === 1) {
                this.o = a;
                return a
            } else {
                return this.o
            }
        },
        h: function(a) {
            if (arguments.length === 1) {
                this.g = a != null ? a : String.empty();
                return a
            } else {
                return this.g != null ? this.g : this.s != null ? this.s.a() : null
            }
        },
        v: function(a) {
            if (arguments.length === 1) {
                this.u = a;
                return a
            } else {
                return this.u
            }
        },
        x: function(a) {
            if (arguments.length === 1) {
                this.w = a;
                return a
            } else {
                return this.w
            }
        },
        j: function(a) {
            if (arguments.length === 1) {
                this.i = a != null ? a : String.empty();
                return a
            } else {
                return this.i != null ? this.i : this.s != null ? this.s.c() : null
            }
        },
        l: function(a) {
            if (arguments.length === 1) {
                this.k = a != null ? a : String.empty();
                return a
            } else {
                return this.k != null ? this.k : this.s != null ? this.s.d() : null
            }
        },
        n: function(a) {
            if (arguments.length === 1) {
                this.m = a != null ? a : String.empty();
                return a
            } else {
                return this.m
            }
        },
        z: function(a) {
            if (arguments.length === 1) {
                this.y = a;
                return a
            } else {
                return this.y
            }
        },
        r: function() {
            var a = null;
            if (this.a.length == this.b) {
                a = new $$t.e5;
                this.a.add(a)
            } else {
                a = this.a[this.b]
            }
            a.a = this.d();
            a.b = this.n();
            a.c = this.z();
            this.b++
        },
        q: function() {
            if (this.b == 0) {
                throw new $$t.ea(3, "Unexpected end of element scope.")
            }
            this.b--;
            var a = this.a[this.b];
            this.c = a.a;
            this.m = a.b;
            this.y = a.c
        },
        $type: new $.ig.Type("XmlParserContext", $.ig.$ot)
    }, true);
    $c("XmlParserContext_ContextItem:e5", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        a: null,
        b: null,
        c: 0,
        $type: new $.ig.Type("XmlParserContext_ContextItem", $.ig.$ot)
    }, true);
    $c("XmlReader:ej", "Object", {
        at: null,
        init: function() {
            $.ig.$op.init.call(this)
        },
        w: function() {},
        z: function() {},
        a: function() {
            return false
        },
        b: function() {
            return false
        },
        c: function() {
            return false
        },
        x: function() {},
        d: function() {},
        e: function() {
            return this.w() > 0
        },
        f: function() {},
        i: function() {},
        h: function() {},
        item: function(a) {},
        item1: function(b) {},
        item2: function(c, d) {},
        ag: function() {},
        ai: function() {},
        aj: function() {},
        a5: function() {},
        a7: function() {},
        ak: function() {},
        v: function() {},
        a3: function() {},
        ar: function() {},
        as: function() {},
        a8: function() {},
        au: function() {},
        aa: function(e) {},
        ab: function(e) {},
        ac: function(e, f) {},
        j: function(e) {
            return e != null && $$t.$d6.g(e)
        },
        k: function(e) {
            return e != null && $$t.$d6.k(e)
        },
        l: function() {
            return this.a6() == 1
        },
        m: function(e) {
            if (!this.l()) {
                return false
            }
            return this.ai() == e
        },
        n: function(e, f) {
            if (!this.l()) {
                return false
            }
            return this.ag() == e && this.aj() == f
        },
        ah: function(e) {},
        aw: function(e) {},
        o: function(e) {},
        p: function(e, f) {},
        g: function(e) {
            switch (e) {
                case 3:
                    return true;
                case 4:
                    return true;
                case 1:
                    return true;
                case 15:
                    return true;
                case 5:
                    return true;
                case 16:
                    return true
            }
            return false
        },
        a6: function() {
            switch (this.a3()) {
                case 0:
                case 1:
                    break;
                default:
                    return this.a7()
            }
            if (this.a7() == 2) {
                this.q()
            }
            do {
                if (this.g(this.a7())) {
                    return this.a7()
                }
                this.t()
            } while (!this.d());
            return 0
        },
        q: function() {},
        r: function() {},
        s: function() {},
        t: function() {},
        u: function() {},
        al: function() {
            if (this.a6() != 1) {
                var e = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(e)
            }
            var f = String.empty();
            if (!this.i()) {
                this.t();
                f = this.aq();
                if (this.a7() != 15) {
                    var g = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                    throw this.a4(g)
                }
            }
            this.t();
            return f
        },
        am: function(e) {
            if (this.a6() != 1) {
                var f = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(f)
            }
            if (e != this.ai()) {
                var g = $5("The {0} tag from namespace {1} is expected.", this.ai(), this.aj());
                throw this.a4(g)
            }
            var h = String.empty();
            if (!this.i()) {
                this.t();
                h = this.aq();
                if (this.a7() != 15) {
                    var i = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                    throw this.a4(i)
                }
            }
            this.t();
            return h
        },
        an: function(e, f) {
            if (this.a6() != 1) {
                var g = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(g)
            }
            if (e != this.ag() || this.aj() != f) {
                var h = $5("The {0} tag from namespace {1} is expected.", this.ag(), this.aj());
                throw this.a4(h)
            }
            var i = String.empty();
            if (!this.i()) {
                this.t();
                i = this.aq();
                if (this.a7() != 15) {
                    var j = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                    throw this.a4(j)
                }
            }
            this.t();
            return i
        },
        ax: function() {
            if (this.a6() != 15) {
                var e = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(e)
            }
            this.t()
        },
        ao: function() {
            if (this.a3() != 1 || this.a7() == 15) {
                return String.empty()
            }
            if (this.i()) {
                this.t();
                return String.empty()
            }
            var e = new $$t.d2(0);
            var f = new $$t.el(1, e);
            if (this.a7() == 1) {
                var g = this.x();
                this.t();
                while (g < this.x()) {
                    if (this.a3() != 1) {
                        throw this.a4("Unexpected end of the XML reader.")
                    }
                    f.ac(this, false)
                }
                this.t()
            } else {
                f.ac(this, false)
            }
            return e.toString()
        },
        ap: function() {
            if (this.a3() != 1 || this.a7() == 15) {
                return String.empty()
            }
            switch (this.a7()) {
                case 1:
                case 2:
                    var e = new $$t.d2(0);
                    var f = new $$t.el(1, e);
                    f.ac(this, false);
                    return e.toString();
                default:
                    this.a2();
                    return String.empty()
            }
        },
        ay: function() {
            if (this.a6() != 1) {
                var e = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(e)
            }
            this.t()
        },
        az: function(e) {
            if (this.a6() != 1) {
                var f = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(f)
            }
            if (e != this.ai()) {
                var g = $5("The {0} tag from namespace {1} is expected.", this.ai(), this.aj());
                throw this.a4(g)
            }
            this.t()
        },
        a0: function(e, f) {
            if (this.a6() != 1) {
                var g = $5("'{0}' is an invalid node type.", $$t.$ek.$getName(this.a7()));
                throw this.a4(g)
            }
            if (e != this.ag() || this.aj() != f) {
                var h = $6("Expecting {0} tag from namespace {1}, got {2} and {3} instead", [e, f, this.ag(), this.aj()]);
                throw this.a4(h)
            }
            this.t()
        },
        aq: function() {
            if (this.at == null) {
                this.at = new $$t.d3(0)
            }
            this.at.c(0);
            this.q();
            switch (this.a7()) {
                default: return String.empty();
                case 1:
                        if (this.i()) {
                        return String.empty()
                    }do {
                        this.t();
                        switch (this.a7()) {
                            case 3:
                            case 4:
                            case 13:
                            case 14:
                                this.at.k(this.ar());
                                continue
                        }
                        break
                    } while (true);
                    break;
                case 3:
                        case 4:
                        case 13:
                        case 14:
                        do {
                        switch (this.a7()) {
                            case 3:
                            case 4:
                            case 13:
                            case 14:
                                this.at.k(this.ar());
                                this.t();
                                continue
                        }
                        break
                    } while (true);
                    break
            }
            var e = this.at.toString();
            this.at.c(0);
            return e
        },
        y: function(e, f, g) {
            throw new $$t.x(1)
        },
        a1: function() {},
        a2: function() {
            if (this.a3() != 1) {
                return
            }
            this.q();
            if (this.a7() != 1 || this.i()) {
                this.t();
                return
            }
            var e = this.x();
            while (this.t() && e < this.x()) {}
            if (this.a7() == 15) {
                this.t()
            }
        },
        a4: function(e) {
            return new $$t.ea(2, $b($$t.$cw.$type, this), this.z(), e)
        },
        dispose: function() {
            this.disposeCore(true)
        },
        disposeCore: function(e) {
            if (e && this.a3() != 4) {
                this.au()
            }
        },
        $type: new $.ig.Type("XmlReader", $.ig.$ot, [$$t.$aq.$type])
    }, true);
    $c("XmlResolver:es", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        a: function(a) {},
        b: function(b, c, d) {},
        d: function(b, c) {
            if (b == null) {
                if (c == null) {
                    throw new $$t.bd(0, "Either baseUri or relativeUri are required.")
                }
                if (c.startsWith("http:") || c.startsWith("https:") || c.startsWith("ftp:") || c.startsWith("file:")) {
                    return new $$t.ev(0, c)
                }
                throw new $$t.cv(1, c + " not supported")
            }
            if (c == null) {
                return b
            }
            return new $$t.ev(3, b, this.c(c))
        },
        c: function(b) {
            return $4($4($4($4($4(b, "<", "%3C"), ">", "%3E"), "#", "%23"), "%", "%25"), '"', "%22")
        },
        $type: new $.ig.Type("XmlResolver", $.ig.$ot)
    }, true);
    $c("NonBlockingStreamReader:e2", "TextReader", {
        l: null,
        k: null,
        p: 0,
        u: 0,
        o: 0,
        z: null,
        x: null,
        w: null,
        n: false,
        ab: null,
        init: function(a, b) {
            $$t.$d0.init.call(this);
            var c = 1024;
            this.w = a;
            this.l = new Array(c);
            this.o = c;
            this.z = b;
            this.x = this.y();
            this.k = new Array(b.getMaxCharCount(c));
            this.p = 0;
            this.u = 0
        },
        y: function() {
            return this.z.getDecoder()
        },
        aa: function() {
            return this.z
        },
        i: function() {
            this.dispose1(true)
        },
        dispose1: function(a) {
            if (a && this.w != null) {
                this.w.close()
            }
            this.l = null;
            this.k = null;
            this.z = null;
            this.x = null;
            this.w = null;
            $$t.$d0.dispose1.call(this, a)
        },
        ac: function() {
            this.u = this.p = 0;
            this.n = false;
            this.x = this.y()
        },
        v: function() {
            this.u = 0;
            var a = 0;
            this.p = 0;
            var b = 0;
            do {
                a = this.w.read(this.l, 0, this.o);
                if (a == 0) {
                    return 0
                }
                this.n = a < this.o;
                this.p += this.x.c(this.l, b, a, this.k, 0);
                b = 0
            } while (this.p == 0);
            return this.p
        },
        a: function() {
            if (this.w == null) {
                throw new $$t.c5(1, "StreamReader", "Cannot read from a closed StreamReader")
            }
            if (this.u >= this.p && (this.n || this.v() == 0)) {
                return -1
            }
            return this.k[this.u].charCodeAt(0)
        },
        b: function() {
            if (this.w == null) {
                throw new $$t.c5(1, "StreamReader", "Cannot read from a closed StreamReader")
            }
            if (this.u >= this.p && this.v() == 0) {
                return -1
            }
            return this.k[this.u++].charCodeAt(0)
        },
        c: function(a, b, c) {
            if (this.w == null) {
                throw new $$t.c5(1, "StreamReader", "Cannot read from a closed StreamReader")
            }
            if (a == null) {
                throw new $$t.bd(0, "dest_buffer")
            }
            if (b < 0) {
                throw new $$t.bg(2, "index", "< 0")
            }
            if (c < 0) {
                throw new $$t.bg(2, "count", "< 0")
            }
            if (b > a.length - c) {
                throw new $$t.bf(1, "index + count > dest_buffer.Length")
            }
            var d = 0; {
                if (this.u >= this.p && this.v() == 0) {
                    return d > 0 ? d : 0
                }
                var e = Math.min(this.p - this.u, c);
                $.ig.util.arrayCopy1(this.k, this.u, a, b, e);
                this.u += e;
                b += e;
                c -= e;
                d += e
            }
            return d
        },
        m: false,
        s: function() {
            var a = "\0";
            for (; this.u < this.p; this.u++) {
                a = this.k[this.u];
                if (a == "\n") {
                    this.u++;
                    var b = this.m ? this.u - 2 : this.u - 1;
                    if (b < 0) {
                        b = 0
                    }
                    this.m = false;
                    return b
                } else if (this.m) {
                    this.m = false;
                    return this.u - 1
                }
                this.m = a == "\r"
            }
            return -1
        },
        g: function() {
            if (this.w == null) {
                throw new $$t.c5(1, "StreamReader", "Cannot read from a closed StreamReader")
            }
            if (this.u >= this.p && this.v() == 0) {
                return null
            }
            var a = this.u;
            var b = this.s();
            if (b < this.p && b >= a) {
                return $.ig.util.createString3(this.k, a, b - a)
            }
            if (this.ab == null) {
                this.ab = new $$t.d3(0)
            } else {
                this.ab.c(0)
            }
            while (true) {
                if (this.m) {
                    this.p--
                }
                this.ab.k($.ig.util.createString3(this.k, a, this.p - a));
                if (this.v() == 0) {
                    if (this.ab.b() > 32768) {
                        var c = this.ab;
                        this.ab = null;
                        return c.f(0, c.c())
                    }
                    return this.ab.f(0, this.ab.c())
                }
                a = this.u;
                b = this.s();
                if (b < this.p && b >= a) {
                    this.ab.k($.ig.util.createString3(this.k, a, b - a));
                    if (this.ab.b() > 32768) {
                        var d = this.ab;
                        this.ab = null;
                        return d.f(0, d.c())
                    }
                    return this.ab.f(0, this.ab.c())
                }
            }
        },
        h: function() {
            if (this.w == null) {
                throw new $$t.c5(1, "StreamReader", "Cannot read from a closed StreamReader")
            }
            var a = new $$t.d3(0);
            var b = this.k.length;
            var c = new Array(b);
            var d;
            while ((d = this.c(c, 0, b)) != 0) {
                a.g(c, 0, d)
            }
            return a.toString()
        },
        $type: new $.ig.Type("NonBlockingStreamReader", $$t.$d0.$type)
    }, true);
    $c("XmlStreamReader:e1", "NonBlockingStreamReader", {
        ae: null,
        init: function(a, b) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$e2.init.call(this, b, b.actualEncoding() != null ? b.actualEncoding() : $$t.$e3.strictUTF8);
            this.ae = b
        },
        init1: function(a, b) {
            $$t.$e1.init.call(this, 0, new $$t.e3(b))
        },
        i: function() {
            this.ae.close()
        },
        c: function(a, b, c) {
            try {
                return $$t.$e2.c.call(this, a, b, c)
            } catch (d) {
                throw new $$t.ea(3, "invalid data.")
            }
        },
        dispose1: function(a) {
            $$t.$e2.dispose1.call(this, a);
            if (a) {
                this.i()
            }
        },
        $type: new $.ig.Type("XmlStreamReader", $$t.$e2.$type)
    }, true);
    $c("XmlInputStream:e3", "Stream", {
        staticInit: function() {
            $$t.$e3.strictUTF8 = new $$t.dq(0, false, true)
        },
        w: null,
        t: null,
        o: null,
        p: 0,
        q: 0,
        init: function(a) {
            $$t.$az.init.call(this);
            this.y(a)
        },
        u: function(a, b) {
            var c = this.q;
            while (this.q < a + b) {
                if (this.r() < 0) {
                    return null
                }
            }
            this.q = c;
            return $$t.$dp.aSCII().getString1(this.o, a, b)
        },
        y: function(a) {
            this.o = new Array(6);
            this.t = a;
            this.w = $$t.$e3.strictUTF8;
            this.p = a.read(this.o, 0, this.o.length);
            if (this.p == -1 || this.p == 0) {
                return
            }
            var b = this.r();
            switch (b) {
                case 255:
                    b = this.r();
                    if (b == 254) {
                        this.w = $$t.$dp.unicode()
                    } else {
                        this.q = 0
                    }
                    break;
                case 254:
                    b = this.r();
                    if (b == 255) {
                        this.w = $$t.$dp.bigEndianUnicode();
                        return
                    } else {
                        this.q = 0
                    }
                    break;
                case 239:
                    b = this.r();
                    if (b == 187) {
                        b = this.r();
                        if (b != 191) {
                            this.q = 0
                        }
                    } else {
                        this.o[--this.q] = 239
                    }
                    break;
                case "<".charCodeAt(0):
                    if (this.p >= 5 && this.u(1, 4) == "?xml") {
                        this.q += 4;
                        b = this.s();
                        if (b == "v".charCodeAt(0)) {
                            while (b >= 0) {
                                b = this.r();
                                if (b == "0".charCodeAt(0)) {
                                    this.r();
                                    break
                                }
                            }
                            b = this.s()
                        }
                        if (b == "e".charCodeAt(0)) {
                            if (this.u(this.q, 7) == "ncoding") {
                                this.q += 7;
                                b = this.s();
                                if (b != "=".charCodeAt(0)) {
                                    throw $$t.$e3.z
                                }
                                b = this.s();
                                var c = b;
                                var d = new $$t.d3(0);
                                while (true) {
                                    b = this.r();
                                    if (b == c) {
                                        break
                                    } else if (b < 0) {
                                        throw $$t.$e3.z
                                    }
                                    d.h($t(b))
                                }
                                var e = d.toString();
                                if (!$$t.$d6.o(e)) {
                                    throw $$t.$e3.z
                                }
                                this.w = $$t.$dp.getEncoding(e)
                            }
                        }
                    }
                    this.q = 0;
                    break;
                default:
                    this.q = 0;
                    break
            }
        },
        r: function() {
            if (this.p > this.q) {
                return this.o[this.q++]
            }
            var a = new Array(this.o.length * 2);
            $$t.$bc.c(this.o, 0, a, 0, this.p);
            var b = this.t.read(a, this.p, this.o.length);
            if (b == -1 || b == 0) {
                return -1
            }
            this.p += b;
            this.o = a;
            return this.o[this.q++]
        },
        s: function() {
            var a;
            L0: while (true) {
                a = this.r();
                var t1 = $t(a);
                L1: while (true) {
                    switch (t1) {
                        case "\r":
                            t1 = " ";
                            continue L1;
                        case "\n":
                            t1 = " ";
                            continue L1;
                        case "	":
                            t1 = " ";
                            continue L1;
                        case " ":
                            continue L0;
                        default:
                            return a
                    }
                    break
                }
            }
        },
        actualEncoding: function() {
            return this.w
        },
        canRead: function() {
            if (this.p > this.q) {
                return true
            } else {
                return this.t.canRead()
            }
        },
        canSeek: function() {
            return false
        },
        canWrite: function() {
            return false
        },
        length: function() {
            return this.t.length()
        },
        position: function(a) {
            if (arguments.length === 1) {
                if (a < this.p) {
                    this.q = a
                } else {
                    this.t.position(a - this.p)
                }
                return a
            } else {
                return this.t.position() - this.p + this.q
            }
        },
        close: function() {
            this.t.close()
        },
        flush: function() {
            this.t.flush()
        },
        read: function(a, b, c) {
            var d;
            if (c <= this.p - this.q) {
                $$t.$bc.c(this.o, this.q, a, b, c);
                this.q += c;
                d = c
            } else {
                var e = this.p - this.q;
                if (this.p > this.q) {
                    $$t.$bc.c(this.o, this.q, a, b, e);
                    this.q += e
                }
                d = e + this.t.read(a, b + e, c - e)
            }
            return d
        },
        readByte: function() {
            if (this.p > this.q) {
                return this.o[this.q++]
            }
            return this.t.readByte()
        },
        seek: function(a, b) {
            var c = this.p - this.q;
            if (b == 1) {
                if (a < c) {
                    return this.o[this.q + a]
                } else {
                    return this.t.seek(a - c, b)
                }
            } else {
                return this.t.seek(a, b)
            }
        },
        setLength: function(a) {
            this.t.setLength(a)
        },
        write: function(a, b, c) {
            throw new $$t.x(1)
        },
        $type: new $.ig.Type("XmlInputStream", $$t.$az.$type)
    }, true);
    $c("XmlTextReader:ei", "XmlReader", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break;
                    case 2:
                        this.init2.apply(this, arguments);
                        break;
                    case 3:
                        this.init3.apply(this, arguments);
                        break;
                    case 4:
                        this.init4.apply(this, arguments);
                        break;
                    case 5:
                        this.init5.apply(this, arguments);
                        break;
                    case 6:
                        this.init6.apply(this, arguments);
                        break;
                    case 7:
                        this.init7.apply(this, arguments);
                        break;
                    case 8:
                        this.init8.apply(this, arguments);
                        break;
                    case 9:
                        this.init9.apply(this, arguments);
                        break;
                    case 10:
                        this.init10.apply(this, arguments);
                        break;
                    case 11:
                        this.init11.apply(this, arguments);
                        break;
                    case 12:
                        this.init12.apply(this, arguments);
                        break;
                    case 13:
                        this.init13.apply(this, arguments);
                        break;
                    case 14:
                        this.init14.apply(this, arguments);
                        break;
                    case 15:
                        this.init15.apply(this, arguments);
                        break;
                    case 16:
                        this.init16.apply(this, arguments);
                        break
                }
                return
            }
            this.a9 = new Array(10);
            this.ba = new Array(10);
            this.bm = true;
            this.ec = 0;
            this.ek = new $$t.e0;
            this.bo = false;
            this.bs = false;
            this.bh = true;
            this.eo = new $$t.ey;
            $$t.$ej.init.call(this)
        },
        init1: function(a, b) {
            $$t.$ei.init3.call(this, 3, new $$t.e1(1, b))
        },
        init2: function(a, b) {
            $$t.$ei.init8.call(this, 8, b, new $$t.c1)
        },
        init3: function(a, b) {
            $$t.$ei.init9.call(this, 9, b, new $$t.c1)
        },
        init4: function(a, b) {
            $$t.$ei.init16.call(this, 16, String.empty(), null, 0, null)
        },
        init5: function(a, b, c) {
            $$t.$ei.init9.call(this, 9, new $$t.e1(1, b), c)
        },
        init6: function(a, b, c) {
            $$t.$ei.init7.call(this, 7, b, new $$t.e1(1, c))
        },
        init7: function(a, b, c) {
            $$t.$ei.init14.call(this, 14, b, c, new $$t.c1)
        },
        init8: function(a, b, c) {
            var $self = this;
            this.a9 = new Array(10);
            this.ba = new Array(10);
            this.bm = true;
            this.ec = 0;
            this.ek = new $$t.e0;
            this.bo = false;
            this.bs = false;
            this.bh = true;
            this.eo = new $$t.ey;
            $$t.$ej.init.call(this);
            var d;
            var e = function() {
                var f = $self.cw(b, d);
                d = f.p1;
                return f.ret
            }();
            var f = new $$t.eg(0, c, new $$t.ed(c), String.empty(), 0);
            this.dn(d, f, new $$t.e1(1, e), 9)
        },
        init9: function(a, b, c) {
            $$t.$ei.init14.call(this, 14, String.empty(), b, c)
        },
        init10: function(a, b, c, d, e, f) {
            var $self = this;
            this.a9 = new Array(10);
            this.ba = new Array(10);
            this.bm = true;
            this.ec = 0;
            this.ek = new $$t.e0;
            this.bo = false;
            this.bs = false;
            this.bh = true;
            this.eo = new $$t.ey;
            $$t.$ej.init.call(this);
            if (c == null) {
                c = new $$t.e0
            }
            this.em(c);
            var g;
            var h = function() {
                var i = $self.cw(d, g);
                g = i.p1;
                return i.ret
            }();
            this.dn(g, f, new $$t.e1(1, h), e)
        },
        init11: function(a, b, c, d) {
            $$t.$ei.init16.call(this, 16, d != null ? d.d() : String.empty(), new $$t.e1(1, b), c, d);
            this.bk = true
        },
        init12: function(a, b, c, d) {
            $$t.$ei.init16.call(this, 16, b, c, d, null)
        },
        init13: function(a, b, c, d) {
            $$t.$ei.init14.call(this, 14, b, new $$t.e1(1, c), d)
        },
        init14: function(a, b, c, d) {
            $$t.$ei.init16.call(this, 16, b, c, 9, null)
        },
        init15: function(a, b, c, d) {
            $$t.$ei.init16.call(this, 16, d != null ? d.d() : String.empty(), new $$t.dz(b), c, d);
            this.bk = true
        },
        init16: function(a, b, c, d, e) {
            this.a9 = new Array(10);
            this.ba = new Array(10);
            this.bm = true;
            this.ec = 0;
            this.ek = new $$t.e0;
            this.bo = false;
            this.bs = false;
            this.bh = true;
            this.eo = new $$t.ey;
            $$t.$ej.init.call(this);
            this.dn(b, e, c, d)
        },
        cw: function(a, b) {
            var c = this.ek.d(null, a);
            b = c != null ? c.toString() : String.empty();
            return {
                ret: $b($$t.$az.$type, this.ek.b(c, null, $$t.$az.$type)),
                p1: b
            }
        },
        w: function() {
            return this.b3
        },
        z: function() {
            return this.ej.d()
        },
        a: function() {
            return true
        },
        b: function() {
            return true
        },
        bf: function(a) {
            if (arguments.length === 1) {
                this.bg = a;
                return a
            } else {
                return this.bg
            }
        },
        bi: function(a) {
            if (arguments.length === 1) {
                this.bh = a;
                return a
            } else {
                return this.bh
            }
        },
        x: function() {
            var a = this.er.n == 1 ? 0 : -1;
            if (this.b7 >= 0) {
                return a + this.cb + 2
            } else if (this.b6 >= 0) {
                return a + this.cb + 1
            }
            return this.cb
        },
        c6: function() {
            return this.ej.p() || $$t.$dp.uTF8()
        },
        d: function() {
            return this.eb == 3
        },
        f: function() {
            return this.es.k() != null
        },
        h: function() {
            return false
        },
        i: function() {
            return this.es.a
        },
        item: function(a) {
            return this.aa(a)
        },
        item1: function(a) {
            return this.ab(a)
        },
        item2: function(a, b) {
            return this.ac(a, b)
        },
        cf: function() {
            if (this.b2) {
                return this.ce
            } else {
                return this.es.c
            }
        },
        cg: function() {
            if (this.b2) {
                return this.b4
            } else {
                return this.es.d
            }
        },
        ag: function() {
            return this.es.g
        },
        ai: function() {
            return this.es.h
        },
        bn: function(a) {
            if (arguments.length === 1) {
                if (this.eb != 0) {
                    throw new $$t.cv(1, "Namespaces have to be set before reading.")
                }
                this.bm = a;
                return a
            } else {
                return this.bm
            }
        },
        aj: function() {
            return this.es.i
        },
        a5: function() {
            return this.eg
        },
        a7: function() {
            return this.es.n
        },
        bp: function(a) {
            if (arguments.length === 1) {
                this.bo = a;
                return a
            } else {
                return this.bo
            }
        },
        ak: function() {
            return this.es.j
        },
        bt: function(a) {
            if (arguments.length === 1) {
                this.bs = a;
                return a
            } else {
                return this.bs
            }
        },
        v: function() {
            return this.es.b
        },
        a3: function() {
            return this.eb
        },
        ar: function() {
            return this.es.k() != null ? this.es.k() : String.empty()
        },
        ed: function(a) {
            if (arguments.length === 1) {
                this.ec = a;
                return a
            } else {
                return this.ec
            }
        },
        as: function() {
            return this.ej.n()
        },
        em: function(a) {
            this.ek = a;
            return a
        },
        a8: function() {
            return this.ej.z()
        },
        au: function() {
            this.eb = 4;
            this.es.m();
            this.er.m();
            this.b3 = 0;
            if (this.bh && this.cy != null) {
                this.cy.i()
            }
        },
        aa: function(a) {
            if (a >= this.b3) {
                throw new $$t.bg(1, "i is smaller than AttributeCount")
            } else {
                return this.a9[a].k()
            }
        },
        ab: function(a) {
            for (var b = 0; b < this.b3; b++) {
                if (this.a9[b].h == a) {
                    return this.a9[b].k()
                }
            }
            return null
        },
        cd: function(a, b) {
            b = b != null ? b : String.empty();
            for (var c = 0; c < this.b3; c++) {
                var d = this.a9[c];
                if (d.g == a && d.i == b) {
                    return c
                }
            }
            return -1
        },
        ac: function(a, b) {
            var c = this.cd(a, b);
            if (c < 0) {
                return null
            }
            return this.a9[c].k()
        },
        cx: function() {
            if (this.cl < 0) {
                return this.cy
            }
            return new $$t.dz($.ig.util.createString3(this.bc, this.ck, this.cl - this.ck) + this.cy.h())
        },
        ah: function(a) {
            return this.c1(a, false)
        },
        c1: function(a, b) {
            var c = this.ef.lookupNamespace1(a, b);
            return c == String.empty() ? null : c
        },
        aw: function(a) {
            if (a >= this.b3) {
                throw new $$t.bg(1, "attribute index out of range.")
            }
            this.b6 = a;
            this.b7 = -1;
            this.es = this.a9[a]
        },
        o: function(a) {
            for (var b = 0; b < this.b3; b++) {
                var c = this.a9[b];
                if (c.h == a) {
                    this.aw(b);
                    return true
                }
            }
            return false
        },
        p: function(a, b) {
            var c = this.cd(a, b);
            if (c < 0) {
                return false
            }
            this.aw(c);
            return true
        },
        q: function() {
            if (this.er == null) {
                return false
            }
            if (this.es == this.er) {
                return false
            }
            if (this.b6 >= 0) {
                this.b6 = -1;
                this.b7 = -1;
                this.es = this.er;
                return true
            } else {
                return false
            }
        },
        r: function() {
            if (this.b3 == 0) {
                return false
            }
            this.q();
            return this.s()
        },
        s: function() {
            if (this.b6 == 0 && this.b3 == 0) {
                return false
            }
            if (this.b6 + 1 < this.b3) {
                this.b6++;
                this.b7 = -1;
                this.es = this.a9[this.b6];
                return true
            } else {
                return false
            }
        },
        t: function() {
            if (this.eb == 4) {
                return false
            }
            this.b5 = this.ck;
            this.br = true;
            this.ch = 0;
            this.df();
            if (this.ei == 2) {
                if (this.b6 == 0) {
                    return false
                }
                this.d6();
                this.de();
                this.dk();
                this.ds('"'.charCodeAt(0));
                this.es = this.a9[0];
                this.b7 = -1;
                this.eb = 1;
                return true
            }
            if (this.eb == 0 && this.eh == 1) {
                this.d6()
            }
            var a = false;
            this.eb = 1;
            this.b8 = this.ce;
            this.b9 = this.b4;
            this.b2 = true;
            this.es = this.er;
            this.b3 = 0;
            this.b6 = this.b7 = -1;
            this.er.m();
            if (this.bj) {
                ++this.ca;
                this.bj = false
            }
            if (this.bu) {
                this.bu = false;
                return this.bx()
            }
            a = this.bv();
            if (!a && this.ei == 9 && this.eh != 15) {
                throw this.ee("Document element did not appear.")
            }
            this.b2 = false;
            return a
        },
        u: function() {
            if (this.eb == 0 && this.ei == 2) {
                this.t()
            }
            if (this.b6 < 0) {
                return false
            }
            var a = this.a9[this.b6];
            if (this.b7 < 0) {
                this.b7 = a.q - 1
            }
            if (this.b7 < a.p) {
                this.b7++;
                this.es = this.ba[this.b7];
                return true
            } else {
                return false
            }
        },
        cn: function(a, b, c) {
            return 0
        },
        co: function(a, b, c) {
            return 0
        },
        cr: function(a, b, c) {
            if (b < 0) {
                throw new $$t.bg(3, "offset", b, "Offset must be non-negative integer.")
            } else if (c < 0) {
                throw new $$t.bg(3, "length", c, "Length must be non-negative integer.")
            } else if (a.length < b + c) {
                throw new $$t.bg(1, "buffer length is smaller than the sum of offset and length.")
            }
            if (this.i()) {
                this.t();
                return 0
            }
            if (!this.bu && this.a7() != 1) {
                return 0
            }
            this.br = false;
            this.bu = true;
            this.b2 = true;
            return this.cs(a, b, c)
        },
        d2: function() {
            if (this.bk) {
                throw new $$t.cv(1, "Cannot call ResetState when parsing an XML fragment.")
            }
            this.dd()
        },
        a1: function() {
            throw new $$t.cv(1, "XmlTextReader cannot resolve external entities.")
        },
        el: function() {
            return this.ek
        },
        es: null,
        er: null,
        ep: null,
        eq: null,
        a9: null,
        ba: null,
        b6: 0,
        b7: 0,
        b3: 0,
        ej: null,
        eg: null,
        ef: null,
        eb: 0,
        bk: false,
        ca: 0,
        cb: 0,
        bj: false,
        bq: false,
        bb: null,
        cc: 0,
        be: false,
        bl: false,
        bz: false,
        c0: null,
        c7: null,
        cy: null,
        bc: null,
        ck: 0,
        cl: 0,
        b5: 0,
        br: false,
        ce: 0,
        b4: 0,
        b8: 0,
        b9: 0,
        b2: false,
        ei: 0,
        eh: 0,
        ch: 0,
        bu: false,
        bm: false,
        ec: 0,
        ek: null,
        bo: false,
        bg: false,
        bs: false,
        bh: false,
        d9: 0,
        ea: null,
        bd: null,
        ee: function(a) {
            return new $$t.ea(2, $b($$t.$cw.$type, this), this.z(), a)
        },
        initXmlTextReader: function() {
            this.be = false;
            this.bb = new Array(10);
            this.c7 = new $$t.d3(0);
            this.bg = true;
            this.bs = false;
            this.bh = true;
            this.d9 = 2;
            this.ck = 0;
            if (this.bc == null) {
                this.bc = new Array(1024)
            }
            this.cl = -1;
            this.b5 = -1;
            this.ce = 1;
            this.b4 = 1;
            this.b8 = this.b9 = 0;
            this.dd()
        },
        dd: function() {
            this.er = new $$t.er(this);
            this.es = this.er;
            this.b6 = -1;
            this.b7 = -1;
            this.b3 = 0;
            this.eb = 0;
            this.ca = 0;
            this.cb = 0;
            this.bj = false;
            this.bq = this.be = false;
            this.cc = 0;
            this.bl = false;
            this.bz = false;
            this.c0 = String.empty();
            this.b2 = false;
            this.eh = 0;
            this.bu = false
        },
        dn: function(a, b, c, d) {
            this.ei = d;
            this.ej = b;
            if (b == null) {
                var e = new $$t.c1;
                this.ej = new $$t.eg(0, e, new $$t.ed(e), String.empty(), 0)
            }
            this.eg = this.ej.x();
            this.eg = this.eg != null ? this.eg : new $$t.c1;
            this.ef = this.ej.v();
            this.ef = this.ef != null ? this.ef : new $$t.ed(this.eg);
            if (a != null && a.length > 0) {
                var f = null;
                try {
                    f = new $$t.ev(0, a)
                } catch (g) {
                    throw g
                }
                this.ej.d(f.toString())
            }
            this.initXmlTextReader();
            this.cy = c;
            switch (d) {
                case 2:
                    this.cy = new $$t.dz($4(c.h(), '"', "&quot;"));
                    break;
                case 1:
                    this.eh = 1;
                    this.be = true;
                    break;
                case 9:
                    break;
                default:
                    throw new $$t.ea(3, $5("NodeType {0} is not allowed to create XmlTextReader.", $$t.$ek.getBox(d)))
            }
        },
        d4: function(a, b, c, d, e, f, g) {
            this.d5(this.er, a, b, c, d, e, f, g);
            this.er.c = this.b8;
            this.er.d = this.b9
        },
        d5: function(a, b, c, d, e, f, g, h) {
            a.n = b;
            a.h = c;
            a.j = d;
            a.g = e;
            a.a = f;
            a.k(g);
            this.cb = this.ca;
            if (h) {
                this.de()
            }
        },
        de: function() {
            this.b3 = 0;
            this.b6 = -1;
            this.b7 = -1
        },
        cm: function(a) {
            if (this.cl <= this.ck + 1) {
                if (!this.bw(a)) {
                    return a
                }
            }
            var b = this.bc[this.ck].charCodeAt(0);
            var c = this.bc[this.ck + 1].charCodeAt(0);
            if ((b & 64512) != 55296 || (c & 64512) != 56320) {
                return b
            }
            return 65536 + (b - 55296) * 1024 + (c - 56320)
        },
        ci: function() {
            if (this.ck < this.cl) {
                var a = this.bc[this.ck].charCodeAt(0);
                if (a == 0) {
                    return -1
                }
                if (a < 55296 || a >= 57343) {
                    return a
                }
                return this.cm(a)
            } else {
                if (!this.bw(-1)) {
                    return -1
                }
                return this.ci()
            }
        },
        cp: function() {
            var a = this.ci();
            this.ck++;
            if (a >= 65536) {
                this.ck++
            }
            if (a == "\n".charCodeAt(0)) {
                this.ce++;
                this.b4 = 1
            } else if (a != -1) {
                this.b4++
            }
            return a
        },
        c9: function(a) {
            this.ck++;
            if (a >= 65536) {
                this.ck++
            }
            if (a == "\n".charCodeAt(0)) {
                this.ce++;
                this.b4 = 1
            } else if (a != -1) {
                this.b4++
            }
        },
        bw: function(a) {
            if (this.cl < 0) {
                this.cl = this.cy.c(this.bc, 0, this.bc.length);
                return this.cl > 0
            }
            var b = a >= 0 ? 1 : 0;
            var c = this.cl - this.b5;
            if (!this.br) {
                this.b5 = 0;
                this.ck = 0
            } else if (this.cl < this.bc.length) {} else if (this.b5 <= this.cl >> 1) {
                var d = new Array(this.bc.length * 2);
                $.ig.util.arrayCopy1(this.bc, this.b5, d, 0, c);
                this.bc = d;
                this.b5 = 0;
                this.ck = c
            } else {
                $.ig.util.arrayCopy1(this.bc, this.b5, this.bc, 0, c);
                this.b5 = 0;
                this.ck = c
            }
            if (a >= 0) {
                this.bc[this.ck] = $t(a)
            }
            var e = this.bc.length - this.ck - b;
            if (e > 1024) {
                e = 1024
            }
            var f = this.cy.c(this.bc, this.ck + b, e);
            var g = b + f;
            this.cl = this.ck + g;
            return g != 0
        },
        bv: function() {
            if (this.bq) {
                this.ef.popScope();
                this.ej.q();
                this.bq = false
            }
            if (this.bz) {
                this.d3()
            } else {
                var a = this.ci();
                if (a == -1) {
                    this.eb = 3;
                    this.df();
                    this.d4(0, String.empty(), String.empty(), String.empty(), false, null, true);
                    if (this.ca > 0) {
                        throw this.ee("unexpected end of file. Current depth is " + this.ca)
                    }
                    return false
                } else {
                    switch (a) {
                        case 60:
                            this.c9(a);
                            switch (this.ci()) {
                                case 47:
                                    this.c9(47);
                                    this.dx();
                                    break;
                                case 63:
                                    this.c9(63);
                                    this.dz();
                                    break;
                                case 33:
                                    this.c9(33);
                                    this.dv();
                                    break;
                                default:
                                    this.d0();
                                    break
                            }
                            break;
                        case 13:
                        case 10:
                        case 9:
                        case 32:
                            if (!this.by()) {
                                return this.bv()
                            }
                            break;
                        default:
                            this.d1(true);
                            break
                    }
                }
            }
            return this.a3() != 3
        },
        d3: function() {
            this.df();
            this.d4(5, this.c0, String.empty(), this.c0, false, null, true);
            this.bz = false;
            this.c0 = String.empty()
        },
        d0: function() {
            var $self = this;
            if (this.eh == 15) {
                throw this.ee("Multiple document element was detected.")
            }
            this.eh = 1;
            this.ef.pushScope();
            this.b8 = this.ce;
            this.b9 = this.b4;
            var a, b;
            var c = function() {
                var d = $self.c3(a, b);
                a = d.p0;
                b = d.p1;
                return d.ret
            }();
            if (this.eh == 15) {
                throw this.ee("document has terminated, cannot open new element")
            }
            var d = false;
            this.de();
            this.b0();
            if ($$t.$d6.e(this.ci())) {
                this.dr(false)
            }
            this.es = this.er;
            for (var e = 0; e < this.b3; e++) {
                this.a9[e].u()
            }
            for (var f = 0; f < this.b3; f++) {
                this.a9[f].t()
            }
            if (this.bm) {
                for (var g = 0; g < this.b3; g++) {
                    if (this.a9[g].j == "xmlns" && this.a9[g].k() == String.empty()) {
                        throw this.ee("Empty namespace URI cannot be mapped to non-empty prefix.")
                    }
                }
            }
            for (var h = 0; h < this.b3; h++) {
                for (var i = h + 1; i < this.b3; i++) {
                    if ($.ig.$op.referenceEquals(this.a9[h].h, this.a9[i].h) || $.ig.$op.referenceEquals(this.a9[h].g, this.a9[i].g) && $.ig.$op.referenceEquals(this.a9[h].i, this.a9[i].i)) {
                        throw this.ee("Attribute name and qualified name must be identical.")
                    }
                }
            }
            if (this.ci() == "/".charCodeAt(0)) {
                this.c9("/".charCodeAt(0));
                d = true;
                this.bq = true
            } else {
                this.bj = true;
                this.dq(c, b, a)
            }
            this.ej.r();
            this.dg(">".charCodeAt(0));
            this.d4(1, c, a, b, d, null, false);
            if (a.length > 0) {
                this.er.i = this.c1(a, true)
            } else if (this.bm) {
                this.er.i = this.ef.defaultNamespace()
            }
            if (this.bm) {
                if (this.aj() == null) {
                    throw this.ee($5("'{0}' is undeclared namespace.", this.ak()))
                }
                try {
                    for (var j = 0; j < this.b3; j++) {
                        this.aw(j);
                        if (this.aj() == null) {
                            throw this.ee($5("'{0}' is undeclared namespace.", this.ak()))
                        }
                    }
                } finally {
                    this.q()
                }
            }
            for (var k = 0; k < this.b3; k++) {
                if (!$.ig.$op.referenceEquals(this.a9[k].j, "xml")) {
                    continue
                }
                var l = this.a9[k].g;
                var m = this.a9[k].k();
                switch (l) {
                    case "base":
                        if (this.ek != null) {
                            var n = this.z() != String.empty() ? new $$t.ev(0, this.z()) : null;
                            if (n == null && String.isNullOrEmpty(m)) {
                                break
                            }
                            var o = this.ek.d(n, m);
                            this.ej.d(o != null ? o.toString() : String.empty())
                        } else {
                            this.ej.d(m)
                        }
                        break;
                    case "lang":
                        this.ej.n(m);
                        break;
                    case "space":
                        switch (m) {
                            case "preserve":
                                this.ej.z(2);
                                break;
                            case "default":
                                this.ej.z(1);
                                break;
                            default:
                                throw this.ee($5("Invalid xml:space value: {0}", m))
                        }
                        break
                }
            }
            if (this.i()) {
                this.dc()
            }
        },
        dq: function(a, b, c) {
            if (this.bb.length == this.cc) {
                var d = new Array(this.bb.length * 2);
                $.ig.util.arrayCopy1(this.bb, 0, d, 0, this.cc);
                this.bb = d
            }
            this.bb[this.cc++] = new $$t.e4(1, a, b, c)
        },
        dx: function() {
            if (this.eh != 1) {
                throw this.ee("End tag cannot appear in this state.")
            }
            this.b8 = this.ce;
            this.b9 = this.b4;
            if (this.cc == 0) {
                throw this.ee("closing element without matching opening element")
            }
            var a = this.bb[--this.cc];
            this.dh(a.b);
            this.di(">");
            --this.ca;
            this.d4(15, a.b, a.c, a.a, false, null, true);
            if (a.c.length > 0) {
                this.er.i = this.c1(a.c, true)
            } else if (this.bm) {
                this.er.i = this.ef.defaultNamespace()
            }
            this.bq = true;
            this.dc()
        },
        dc: function() {
            if (this.ca == 0 && !this.be && (this.i() || this.a7() == 15)) {
                this.eh = 15
            }
        },
        db: function(a) {
            if (a <= $$t.$aa.charMaxValue().charCodeAt(0)) {
                this.c7.h($t(a))
            } else {
                this.da(a)
            }
        },
        da: function(a) {
            this.c7.h($t($a(a - 65536, 1024) + 55296));
            this.c7.h($t((a - 65536) % 1024 + 56320))
        },
        cz: function() {
            switch (this.a7()) {
                case 13:
                case 14:
                    var a = this.c7.c();
                    if (this.bd == null) {
                        this.bd = new Array(32)
                    }
                    if (a >= this.bd.length) {
                        break
                    }
                    if (this.ea == null) {
                        this.ea = new $$t.c1
                    }
                    for (var b = 0; b < a; b++) {
                        this.bd[b] = this.c7.item(b)
                    }
                    return this.ea.a(this.bd, 0, this.c7.c())
            }
            return this.c7.b() < 100 ? this.c7.f(0, this.c7.c()) : this.c7.toString()
        },
        df: function() {
            this.c7.c(0)
        },
        d1: function(a) {
            if (this.eh != 1) {
                throw this.ee("Text node cannot appear in this state.")
            }
            this.br = false;
            if (a) {
                this.df()
            }
            var b = this.ci();
            var c = false;
            while (b != "<".charCodeAt(0) && b != -1) {
                if (b == "&".charCodeAt(0)) {
                    this.cp();
                    b = this.cu(false);
                    if (this.bz) {
                        break
                    }
                } else if (this.bo && b == "\r".charCodeAt(0)) {
                    this.cp();
                    b = this.ci();
                    if (b != "\n".charCodeAt(0)) {
                        this.db("\n".charCodeAt(0))
                    }
                    continue
                } else {
                    if (this.bf() && $$t.$d6.f(b)) {
                        throw this.ee("Not allowed character was found.")
                    }
                    b = this.cp()
                } {
                    if (b <= $$t.$aa.charMaxValue().charCodeAt(0)) {
                        this.c7.h($t(b))
                    } else {
                        this.da(b)
                    }
                }
                if (b == "]".charCodeAt(0)) {
                    if (c) {
                        if (this.ci() == ">".charCodeAt(0)) {
                            throw this.ee("Inside text content, character sequence ']]>' is not allowed.")
                        }
                    }
                    c = true
                } else if (c) {
                    c = false
                }
                b = this.ci();
                a = true
            }
            if (this.bz && this.c7.c() == 0) {
                this.d3()
            } else {
                var d = a ? 3 : this.a8() == 2 ? 14 : 13;
                this.d4(d, String.empty(), String.empty(), String.empty(), false, null, true)
            }
        },
        cu: function(a) {
            if (this.ci() == "#".charCodeAt(0)) {
                this.c9("#".charCodeAt(0));
                return this.cq()
            } else {
                return this.ct(a)
            }
        },
        cq: function() {
            var a = 0;
            var b;
            if (this.ci() == "x".charCodeAt(0)) {
                this.c9("x".charCodeAt(0));
                while ((b = this.ci()) != ";".charCodeAt(0) && b != -1) {
                    this.c9(b);
                    if (b >= "0".charCodeAt(0) && b <= "9".charCodeAt(0)) {
                        a = (a << 4) + b - "0".charCodeAt(0)
                    } else if (b >= "A".charCodeAt(0) && b <= "F".charCodeAt(0)) {
                        a = (a << 4) + b - "A".charCodeAt(0) + 10
                    } else if (b >= "a".charCodeAt(0) && b <= "f".charCodeAt(0)) {
                        a = (a << 4) + b - "a".charCodeAt(0) + 10
                    } else {
                        throw this.ee($7($$t.$ad.invariantCulture(), "invalid hexadecimal digit: {0} (#x{1:X})", [$t(b), b]))
                    }
                }
            } else {
                while ((b = this.ci()) != ";".charCodeAt(0) && b != -1) {
                    this.c9(b);
                    if (b >= "0".charCodeAt(0) && b <= "9".charCodeAt(0)) {
                        a = a * 10 + b - "0".charCodeAt(0)
                    } else {
                        throw this.ee($7($$t.$ad.invariantCulture(), "invalid decimal digit: {0} (#x{1:X})", [$t(b), b]))
                    }
                }
            }
            this.cp();
            if (this.bf() && this.bp() && $$t.$d6.f(a)) {
                throw this.ee("Referenced character was not allowed in XML. Normalization is " + this.bo + ", checkCharacters = " + this.bg)
            }
            return a
        },
        ct: function(a) {
            var b = this.c2();
            this.dg(";".charCodeAt(0));
            var c = $$t.$d6.r(b);
            if (c >= 0) {
                return c
            } else {
                if (a) {
                    this.db("&".charCodeAt(0));
                    for (var d = 0; d < b.length; d++) {
                        this.db(b.charAt(d).charCodeAt(0))
                    }
                    this.db(";".charCodeAt(0))
                } else {
                    this.bz = true;
                    this.c0 = b
                }
            }
            return -1
        },
        dr: function(a) {
            var $self = this;
            var b = -1;
            var c = false;
            this.b6 = -1;
            this.b7 = -1;
            do {
                if (!this.b0() && c) {
                    throw this.ee("Unexpected token. Name is required here.")
                }
                this.dk();
                this.ep.c = this.ce;
                this.ep.d = this.b4;
                var d, e;
                this.ep.h = function() {
                    var f = $self.c3(d, e);
                    d = f.p0;
                    e = f.p1;
                    return f.ret
                }();
                this.ep.j = d;
                this.ep.g = e;
                this.di("=");
                this.b0();
                this.ds(-1);
                var f;
                if (a) {
                    f = this.ep.k()
                }
                this.b3++;
                if (!this.b0()) {
                    c = true
                }
                b = this.ci();
                if (a) {
                    if (b == "?".charCodeAt(0)) {
                        break
                    }
                } else if (b == "/".charCodeAt(0) || b == ">".charCodeAt(0)) {
                    break
                }
            } while (b != -1);
            this.b6 = -1;
            this.b7 = -1
        },
        c8: function(a, b) {
            this.dk();
            var c = this.a9[this.b6];
            c.h = this.a5().b(a);
            c.j = String.empty();
            c.i = String.empty();
            this.dl();
            var d = this.ba[this.b7];
            this.d5(d, 3, String.empty(), String.empty(), String.empty(), false, b, false);
            c.k(b);
            this.b3++
        },
        dk: function() {
            this.b6++;
            if (this.a9.length == this.b6) {
                var a = new Array(this.a9.length * 2);
                $.ig.util.arrayCopyTo(this.a9, a, 0);
                this.a9 = a
            }
            if (this.a9[this.b6] == null) {
                this.a9[this.b6] = new $$t.ez(this)
            }
            this.ep = this.a9[this.b6];
            this.ep.m()
        },
        dl: function() {
            this.b7++;
            if (this.ba.length == this.b7) {
                var a = new Array(this.ba.length * 2);
                $.ig.util.arrayCopyTo(this.ba, a, 0);
                this.ba = a
            }
            if (this.ba[this.b7] == null) {
                this.ba[this.b7] = new $$t.er(this)
            }
            this.eq = this.ba[this.b7];
            this.eq.m()
        },
        ds: function(a) {
            var b = a < 0 ? this.cp() : a;
            if (b != "'".charCodeAt(0) && b != '"'.charCodeAt(0)) {
                throw this.ee("an attribute value was not quoted")
            }
            this.ep.b = $t(b);
            this.dl();
            this.ep.q = this.b7;
            this.eq.c = this.ce;
            this.eq.d = this.b4;
            var c = false;
            var d = true;
            var e = true;
            var f = 0;
            this.eq.f = this.c7.c();
            L0: while (e) {
                f = this.cp();
                if (f == b) {
                    break
                }
                if (c) {
                    this.dl();
                    this.eq.f = this.c7.c();
                    this.eq.c = this.ce;
                    this.eq.d = this.b4;
                    c = false;
                    d = true
                }
                var t1 = f;
                L1: while (true) {
                    switch (t1) {
                        case "<".charCodeAt(0):
                            throw this.ee("attribute values cannot contain '<'");
                        case -1:
                            if (a < 0) {
                                throw this.ee("unexpected end of file in an attribute value")
                            } else {
                                e = false
                            }
                            break;
                        case "\r".charCodeAt(0):
                            if (!this.bo) {
                                t1 = void 0;
                                continue L1
                            }
                            if (this.ci() == "\n".charCodeAt(0)) {
                                continue L0
                            }
                            if (!this.bo) {
                                t1 = void 0;
                                continue L1
                            }
                            f = " ".charCodeAt(0);
                            t1 = void 0;
                            continue L1;
                        case "\n".charCodeAt(0):
                        case "	".charCodeAt(0):
                            if (!this.bo) {
                                t1 = void 0;
                                continue L1
                            }
                            f = " ".charCodeAt(0);
                            t1 = void 0;
                            continue L1;
                        case "&".charCodeAt(0):
                            if (this.ci() == "#".charCodeAt(0)) {
                                this.c9("#".charCodeAt(0));
                                f = this.cq();
                                this.db(f);
                                break
                            }
                            var g = this.c2();
                            this.dg(";".charCodeAt(0));
                            var h = $$t.$d6.r(g);
                            if (h < 0) {
                                {
                                    this.eq.e = this.c7.c();
                                    this.eq.n = 3;
                                    if (!d) {
                                        this.dl()
                                    }
                                    this.eq.h = g;
                                    this.eq.k(String.empty());
                                    this.eq.n = 5;
                                    c = true
                                }
                            } else {
                                this.db(h)
                            }
                            break;
                        default:
                            if (this.bf() && $$t.$d6.f(f)) {
                                throw this.ee("Invalid character was found.")
                            } {
                                if (f <= $$t.$aa.charMaxValue().charCodeAt(0)) {
                                    this.c7.h($t(f))
                                } else {
                                    this.da(f)
                                }
                            }
                            break
                    }
                    break
                }
                d = false
            }
            if (!c) {
                this.eq.e = this.c7.c();
                this.eq.n = 3
            }
            this.ep.p = this.b7
        },
        dz: function() {
            var a = this.c2();
            if (a != "xml" && a.toLocaleLowerCase($$t.$ad.invariantCulture()) == "xml") {
                throw this.ee("Not allowed processing instruction name which starts with 'X', 'M', 'L' was found.")
            }
            if (!this.b0()) {
                if (this.ci() != "?".charCodeAt(0)) {
                    throw this.ee("Invalid processing instruction name was found.")
                }
            }
            this.df();
            var b;
            while ((b = this.ci()) != -1) {
                this.c9(b);
                if (b == "?".charCodeAt(0) && this.ci() == ">".charCodeAt(0)) {
                    this.c9(">".charCodeAt(0));
                    break
                }
                if (this.bf() && $$t.$d6.f(b)) {
                    throw this.ee("Invalid character was found.")
                }
                this.db(b)
            }
            if ($.ig.$op.referenceEquals(a, "xml")) {
                this.d7()
            } else {
                if (this.eh == 0) {
                    this.eh = 17
                }
                this.d4(7, a, String.empty(), a, false, null, true)
            }
        },
        d7: function() {
            var $self = this;
            if (!this.be && this.eh != 0) {
                throw this.ee("XML declaration cannot appear in this state.")
            }
            this.eh = 17;
            var a = this.cz();
            this.de();
            var b = 0;
            var c = null,
                d = null;
            var e, f;
            var g = this.dp(a, b, e, f);
            b = g.p1;
            e = g.p2;
            f = g.p3;
            if (e != "version" || f != "1.0") {
                throw this.ee("'version' is expected.")
            }
            e = String.empty();
            if (function() {
                    var h = $self.b1(a, b);
                    b = h.p1;
                    return h.ret
                }() && b < a.length) {
                var h = this.dp(a, b, e, f);
                b = h.p1;
                e = h.p2;
                f = h.p3
            }
            if (e == "encoding") {
                if (!$$t.$d6.o(f)) {
                    throw this.ee("'encoding' must be a valid IANA encoding name.")
                }
                if ($b($$t.$e1.$type, this.cy) !== null) {
                    this.ej.p(this.cy.aa())
                } else {
                    if (this.ej.p() == null && $8(f, "UTF-8", 2) == 0) {
                        this.ej.p($$t.$dp.uTF8())
                    } else {
                        this.ej.p($$t.$dp.unicode())
                    }
                }
                c = f;
                e = String.empty();
                if (function() {
                        var i = $self.b1(a, b);
                        b = i.p1;
                        return i.ret
                    }() && b < a.length) {
                    var i = this.dp(a, b, e, f);
                    b = i.p1;
                    e = i.p2;
                    f = i.p3
                }
            }
            if (e == "standalone") {
                this.bl = f == "yes";
                if (f != "yes" && f != "no") {
                    throw this.ee("Only 'yes' or 'no' is allow for 'standalone'")
                }
                d = f;
                var j = this.b1(a, b);
                b = j.p1
            } else if (e.length != 0) {
                throw this.ee($5("Unexpected token: '{0}'", e))
            }
            if (b < a.length) {
                throw this.ee("'?' is expected.")
            }
            this.c8("version", "1.0");
            if (c != null) {
                this.c8("encoding", c)
            }
            if (d != null) {
                this.c8("standalone", d)
            }
            this.b6 = this.b7 = -1;
            this.d4(17, "xml", String.empty(), "xml", false, a, false)
        },
        b1: function(a, b) {
            var c = b;
            while (b < a.length && $$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                b++
            }
            return {
                ret: b - c > 0,
                p1: b
            }
        },
        dp: function(a, b, c, d) {
            while (b < a.length && $$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                b++
            }
            var e = b;
            while (b < a.length && $$t.$d6.h(a.charAt(b).charCodeAt(0))) {
                b++
            }
            c = a.substr(e, b - e);
            while (b < a.length && $$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                b++
            }
            if (b == a.length || a.charAt(b) != "=") {
                throw this.ee($5("'=' is expected after {0}", c))
            }
            b++;
            while (b < a.length && $$t.$d6.p(a.charAt(b).charCodeAt(0))) {
                b++
            }
            if (b == a.length || a.charAt(b) != '"' && a.charAt(b) != "'") {
                throw this.ee("'\"' or ''' is expected.")
            }
            var f = a.charAt(b);
            b++;
            e = b;
            while (b < a.length && a.charAt(b) != f) {
                b++
            }
            b++;
            d = a.substr(e, b - e - 1);
            return {
                p1: b,
                p2: c,
                p3: d
            }
        },
        d6: function() {
            if (this.ci() != "<".charCodeAt(0)) {
                return
            }
            this.cp();
            if (this.ci() != "?".charCodeAt(0)) {
                this.ck = 0;
                return
            }
            this.cp();
            while (this.ck < 6) {
                if (this.ci() < 0) {
                    break
                } else {
                    this.cp()
                }
            }
            if ($.ig.util.createString3(this.bc, 2, 4) != "xml ") {
                if ($.ig.util.createString3(this.bc, 2, 4).toLocaleLowerCase($$t.$ad.invariantCulture()) == "xml ") {
                    throw this.ee("Processing instruction name must not be character sequence 'X' 'M' 'L' with case insensitivity.")
                }
                this.ck = 0;
                return
            }
            this.b0();
            if (this.ci() == "v".charCodeAt(0)) {
                this.dh("version");
                this.di("=");
                this.b0();
                var a = this.cp();
                var b = new Array(3);
                var c = 0;
                switch (a) {
                    case "'".charCodeAt(0):
                    case '"'.charCodeAt(0):
                        while (this.ci() != a) {
                            if (this.ci() == -1) {
                                throw this.ee("Invalid version declaration inside text declaration.")
                            } else if (c == 3) {
                                throw this.ee("Invalid version number inside text declaration.")
                            } else {
                                b[c] = $t(this.cp());
                                c++;
                                if (c == 3 && $.ig.util.createString1(b) != "1.0") {
                                    throw this.ee("Invalid version number inside text declaration.")
                                }
                            }
                        }
                        this.cp();
                        this.b0();
                        break;
                    default:
                        throw this.ee("Invalid version declaration inside text declaration.")
                }
            }
            if (this.ci() == "e".charCodeAt(0)) {
                this.dh("encoding");
                this.di("=");
                this.b0();
                var d = this.cp();
                switch (d) {
                    case "'".charCodeAt(0):
                    case '"'.charCodeAt(0):
                        while (this.ci() != d) {
                            if (this.cp() == -1) {
                                throw this.ee("Invalid encoding declaration inside text declaration.")
                            }
                        }
                        this.cp();
                        this.b0();
                        break;
                    default:
                        throw this.ee("Invalid encoding declaration inside text declaration.")
                }
            }
            this.dh("?>");
            this.b5 = this.ck
        },
        dv: function() {
            var a = this.ci();
            switch (a) {
                case "-".charCodeAt(0):
                    this.dh("--");
                    this.du();
                    break;
                case "[".charCodeAt(0):
                    this.cp();
                    this.dh("CDATA[");
                    this.dt();
                    break;
                case "D".charCodeAt(0):
                    this.dh("DOCTYPE");
                    this.dw();
                    break;
                default:
                    throw this.ee("Unexpected declaration markup was found.")
            }
        },
        du: function() {
            if (this.eh == 0) {
                this.eh = 17
            }
            this.br = false;
            this.df();
            var a;
            while ((a = this.ci()) != -1) {
                this.c9(a);
                if (a == "-".charCodeAt(0) && this.ci() == "-".charCodeAt(0)) {
                    this.c9("-".charCodeAt(0));
                    if (this.ci() != ">".charCodeAt(0)) {
                        throw this.ee("comments cannot contain '--'")
                    }
                    this.c9(">".charCodeAt(0));
                    break
                }
                if ($$t.$d6.f(a)) {
                    throw this.ee("Not allowed character was found.")
                }
                this.db(a)
            }
            this.d4(8, String.empty(), String.empty(), String.empty(), false, null, true)
        },
        dt: function() {
            if (this.eh != 1) {
                throw this.ee("CDATA section cannot appear in this state.")
            }
            this.br = false;
            this.df();
            var a = false;
            var b = 0;
            while (this.ci() != -1) {
                if (!a) {
                    b = this.cp()
                }
                a = false;
                if (b == "]".charCodeAt(0) && this.ci() == "]".charCodeAt(0)) {
                    b = this.cp();
                    if (this.ci() == ">".charCodeAt(0)) {
                        this.cp();
                        break
                    } else {
                        a = true
                    }
                }
                if (this.bo && b == "\r".charCodeAt(0)) {
                    b = this.ci();
                    if (b != "\n".charCodeAt(0)) {
                        this.db("\n".charCodeAt(0))
                    }
                    continue
                }
                if (this.bf() && $$t.$d6.f(b)) {
                    throw this.ee("Invalid character was found.")
                } {
                    if (b <= $$t.$aa.charMaxValue().charCodeAt(0)) {
                        this.c7.h($t(b))
                    } else {
                        this.da(b)
                    }
                }
            }
            this.d4(4, String.empty(), String.empty(), String.empty(), false, null, true)
        },
        dw: function() {
            if (this.bs) {
                throw this.ee("Document Type Declaration (DTD) is prohibited in this XML.")
            }
            switch (this.eh) {
                case 10:
                case 1:
                case 15:
                    throw this.ee("Document type cannot appear in this state.")
            }
            this.eh = 10;
            var a = null;
            var b = null;
            var c = null;
            var d = 0;
            var e = 0;
            this.b0();
            a = this.c2();
            this.b0();
            switch (this.ci()) {
                case "S".charCodeAt(0):
                    c = this.c5(true);
                    break;
                case "P".charCodeAt(0):
                    b = this.c4();
                    if (!this.b0()) {
                        throw this.ee("Whitespace is required between PUBLIC id and SYSTEM id.")
                    }
                    c = this.c5(false);
                    break
            }
            this.b0();
            if (this.ci() == "[".charCodeAt(0)) {
                this.cp();
                d = this.cf();
                e = this.cg();
                this.df();
                this.dy();
                this.ej.h(this.cz())
            }
            this.di(">");
            this.d4(10, a, String.empty(), a, false, this.ej.h(), true);
            if (b != null) {
                this.c8("PUBLIC", b)
            }
            if (c != null) {
                this.c8("SYSTEM", c)
            }
            this.b6 = this.b7 = -1
        },
        d8: function(a, b, c, d) {
            return new $$t.bt
        },
        eo: null,
        en: function() {
            return this.eo.c()
        },
        cv: function() {
            var a = this.cp();
            this.db(a);
            return a
        },
        dj: function(a) {
            this.dh(a);
            this.c7.k(a)
        },
        dy: function() {
            var a = true;
            L0: while (a) {
                switch (this.cv()) {
                    case "]".charCodeAt(0):
                        switch (this.en()) {
                            case 1:
                                this.c7.x(this.c7.c() - 1, 1);
                                a = false;
                                break;
                            case 9:
                            case 8:
                            case 7:
                                continue L0;
                            default:
                                throw this.ee("unexpected end of file at DTD.")
                        }
                        break;
                    case -1:
                        throw this.ee("unexpected end of file at DTD.");
                    case "<".charCodeAt(0):
                        switch (this.en()) {
                            case 9:
                            case 8:
                            case 7:
                                continue L0
                        }
                        var b = this.cv();
                        switch (b) {
                            case "?".charCodeAt(0):
                                this.eo.b(6);
                                break;
                            case "!".charCodeAt(0):
                                switch (this.cv()) {
                                    case "E".charCodeAt(0):
                                        switch (this.cv()) {
                                            case "L".charCodeAt(0):
                                                this.dj("EMENT");
                                                this.eo.b(2);
                                                break;
                                            case "N".charCodeAt(0):
                                                this.dj("TITY");
                                                this.eo.b(4);
                                                break;
                                            default:
                                                throw this.ee("unexpected token '<!E'.")
                                        }
                                        break;
                                    case "A".charCodeAt(0):
                                        this.dj("TTLIST");
                                        this.eo.b(3);
                                        break;
                                    case "N".charCodeAt(0):
                                        this.dj("OTATION");
                                        this.eo.b(5);
                                        break;
                                    case "-".charCodeAt(0):
                                        this.dj("-");
                                        this.eo.b(7);
                                        break
                                }
                                break;
                            default:
                                throw this.ee($5("unexpected '<{0}'.", $t(b)))
                        }
                        break;
                    case "'".charCodeAt(0):
                        if (this.en() == 8) {
                            this.eo.d()
                        } else if (this.en() != 9 && this.en() != 7) {
                            this.eo.b(8)
                        }
                        break;
                    case '"'.charCodeAt(0):
                        if (this.en() == 9) {
                            this.eo.d()
                        } else if (this.en() != 8 && this.en() != 7) {
                            this.eo.b(9)
                        }
                        break;
                    case ">".charCodeAt(0):
                        var t1 = this.en();
                        L1: while (true) {
                            switch (t1) {
                                case 2:
                                    t1 = 5;
                                    continue L1;
                                case 3:
                                    t1 = 5;
                                    continue L1;
                                case 4:
                                    t1 = 5;
                                    continue L1;
                                case 5:
                                    this.eo.d();
                                    break;
                                case 9:
                                case 8:
                                case 7:
                                    continue L0;
                                default:
                                    throw this.ee("unexpected token '>'")
                            }
                            break
                        }
                        break;
                    case "?".charCodeAt(0):
                        if (this.en() == 6) {
                            if (this.cv() == ">".charCodeAt(0)) {
                                this.eo.d()
                            }
                        }
                        break;
                    case "-".charCodeAt(0):
                        if (this.en() == 7) {
                            if (this.ci() == "-".charCodeAt(0)) {
                                this.cv();
                                this.dj(">");
                                this.eo.d()
                            }
                        }
                        break;
                    case "%".charCodeAt(0):
                        if (this.en() != 1 && this.en() != 4 && this.en() != 7 && this.en() != 9 && this.en() != 8) {
                            throw this.ee("Parameter Entity Reference cannot appear as a part of markupdecl (see XML spec 2.8).")
                        }
                        break
                }
            }
        },
        c5: function(a) {
            if (a) {
                this.dh("SYSTEM");
                if (!this.b0()) {
                    throw this.ee("Whitespace is required after 'SYSTEM'.")
                }
            } else {
                this.b0()
            }
            var b = this.cp();
            var c = 0;
            this.df();
            while (c != b) {
                c = this.cp();
                if (c < 0) {
                    throw this.ee("Unexpected end of stream in ExternalID.")
                }
                if (c != b) {
                    this.db(c)
                }
            }
            return this.cz()
        },
        c4: function() {
            this.dh("PUBLIC");
            if (!this.b0()) {
                throw this.ee("Whitespace is required after 'PUBLIC'.")
            }
            var a = this.cp();
            var b = 0;
            this.df();
            while (b != a) {
                b = this.cp();
                if (b < 0) {
                    throw this.ee("Unexpected end of stream in ExternalID.")
                }
                if (b != a && !$$t.$d6.m(b)) {
                    throw this.ee($5("character '{0}' not allowed for PUBLIC ID", $t(b)))
                }
                if (b != a) {
                    this.db(b)
                }
            }
            return this.cz()
        },
        c2: function() {
            var $self = this;
            var a, b;
            return function() {
                var c = $self.c3(a, b);
                a = c.p0;
                b = c.p1;
                return c.ret
            }()
        },
        c3: function(a, b) {
            var c = this.br;
            this.br = true;
            var d = this.ck - this.b5;
            var e = this.ci();
            if (!$$t.$d6.e(e)) {
                throw this.ee($7($$t.$ad.invariantCulture(), "a name did not start with a legal character {0} ({1})", [e, $t(e)]))
            }
            this.c9(e);
            var f = 1;
            var g = -1;
            while ($$t.$d6.h(e = this.ci())) {
                this.c9(e);
                if (e == ":".charCodeAt(0) && this.bm && g < 0) {
                    g = f
                }
                f++
            }
            var h = this.b5 + d;
            var i = this.a5().a(this.bc, h, f);
            if (g > 0) {
                a = this.a5().a(this.bc, h, g);
                b = this.a5().a(this.bc, h + g + 1, f - g - 1)
            } else {
                a = String.empty();
                b = i
            }
            this.br = c;
            return {
                ret: i,
                p0: a,
                p1: b
            }
        },
        dg: function(a) {
            var b = this.cp();
            if (b != a) {
                throw this.ee($7($$t.$ad.invariantCulture(), "expected '{0}' ({1:X}) but found '{2}' ({3:X})", [$t(a), a, b < 0 ? "EOF" : $t(b), b]))
            }
        },
        dh: function(a) {
            for (var b = 0; b < a.length; b++) {
                if (this.cp() != a.charAt(b).charCodeAt(0)) {
                    throw this.ee($7($$t.$ad.invariantCulture(), "'{0}' is expected", [a]))
                }
            }
        },
        di: function(a) {
            while (true) {
                var b = this.cp();
                if (b < 33 && $$t.$d6.p(b)) {
                    continue
                }
                if (a.charCodeAt(0) != b) {
                    throw this.ee($7($$t.$ad.invariantCulture(), "Expected {0}, but found {1} [{2}]", [a, b < 0 ? "EOF" : $t(b), b]))
                }
                break
            }
        },
        b0: function() {
            var a = this.ci();
            var b = a == 32 || a == 9 || a == 10 || a == 13;
            if (!b) {
                return false
            }
            this.c9(a);
            while ((a = this.ci()) == 32 || a == 9 || a == 10 || a == 13) {
                this.c9(a)
            }
            return b
        },
        by: function() {
            if (this.eh == 0) {
                this.eh = 17
            }
            var a = this.br;
            this.br = true;
            var b = this.ck - this.b5;
            var c = this.ci();
            do {
                this.c9(c);
                c = this.ci()
            } while (c == 32 || c == 9 || c == 10 || c == 13);
            var d = this.eh == 1 && c != -1 && c != "<".charCodeAt(0);
            if (!d && (this.ec == 2 || this.ec == 1 && this.a8() != 2)) {
                return false
            }
            this.df();
            this.c7.g(this.bc, this.b5, this.ck - this.b5 - b);
            this.br = a;
            if (d) {
                this.d1(false)
            } else {
                var e = this.a8() == 2 ? 14 : 13;
                this.d4(e, String.empty(), String.empty(), String.empty(), false, null, true)
            }
            return true
        },
        cs: function(a, b, c) {
            var d = b;
            for (var e = 0; e < c; e++) {
                var f = this.ci();
                switch (f) {
                    case -1:
                        throw this.ee("Unexpected end of xml.");
                    case "<".charCodeAt(0):
                        if (e + 1 == c) {
                            return e
                        }
                        this.c9(f);
                        if (this.ci() != "/".charCodeAt(0)) {
                            this.ch++;
                            a[d++] = "<";
                            continue
                        } else if (this.ch-- > 0) {
                            a[d++] = "<";
                            continue
                        }
                        this.dg("/".charCodeAt(0));
                        if (this.bj) {
                            this.ca++;
                            this.bj = false
                        }
                        this.dx();
                        this.bu = false;
                        this.t();
                        return e;
                    default:
                        this.c9(f);
                        if (f <= $$t.$aa.charMaxValue().charCodeAt(0)) {
                            a[d++] = $t(f)
                        } else {
                            a[d++] = $t($a(f - 65536, 1024) + 55296);
                            a[d++] = $t((f - 65536) % 1024 + 56320)
                        }
                        break
                }
            }
            return c
        },
        bx: function() {
            if (this.x() == 0) {
                this.eh = 15
            }
            var a;
            do {
                a = this.cp();
                switch (a) {
                    case -1:
                        throw this.ee("Unexpected end of xml.");
                    case "<".charCodeAt(0):
                        if (this.ci() != "/".charCodeAt(0)) {
                            this.ch++;
                            continue
                        } else if (--this.ch > 0) {
                            continue
                        }
                        this.cp();
                        var b = this.c2();
                        if (b != this.bb[this.cc - 1].b) {
                            continue
                        }
                        this.dg(">".charCodeAt(0));
                        this.ca--;
                        return this.t()
                }
            } while (true)
        },
        $type: new $.ig.Type("XmlTextReader", $$t.$ej.$type)
    }, true);
    $c("XmlTextReader_XmlTokenInfo:er", "Object", {
        init: function(a) {
            $.ig.$op.init.call(this);
            this.o = a;
            this.m()
        },
        l: null,
        o: null,
        h: null,
        g: null,
        j: null,
        i: null,
        a: false,
        b: "\0",
        c: 0,
        d: 0,
        f: 0,
        e: 0,
        n: 0,
        k: function(a) {
            if (arguments.length === 1) {
                this.l = a;
                return a
            } else {
                if (this.l == null) {
                    if (this.f >= 0) {
                        this.l = this.o.c7.f(this.f, this.e - this.f)
                    } else {
                        switch (this.n) {
                            case 3:
                            case 14:
                            case 13:
                            case 8:
                            case 4:
                            case 7:
                                this.l = this.o.cz();
                                break
                        }
                    }
                }
                return this.l
            }
        },
        m: function() {
            this.f = -1;
            this.l = null;
            this.n = 0;
            this.h = this.g = this.j = this.i = String.empty();
            this.a = false;
            this.b = '"';
            this.c = this.d = 0
        },
        $type: new $.ig.Type("XmlTextReader_XmlTokenInfo", $.ig.$ot)
    }, true);
    $c("XmlTextReader_XmlAttributeTokenInfo:ez", "XmlTextReader_XmlTokenInfo", {
        init: function(a) {
            this.s = new $$t.d3(0);
            $$t.$er.init.call(this, a);
            this.n = 2
        },
        q: 0,
        p: 0,
        r: null,
        s: null,
        k: function(a) {
            if (arguments.length === 1) {
                this.r = a;
                return a
            } else {
                if (this.r != null) {
                    return this.r
                }
                if (this.q == this.p) {
                    var a = this.o.ba[this.q];
                    if (a.n == 5) {
                        this.r = String.concat("&", a.h, ";")
                    } else {
                        this.r = a.k()
                    }
                    return this.r
                }
                this.s.c(0);
                for (var b = this.q; b <= this.p; b++) {
                    var c = this.o.ba[b];
                    if (c.n == 3) {
                        this.s.k(c.k())
                    } else {
                        this.s.h("&");
                        this.s.k(c.h);
                        this.s.h(";")
                    }
                }
                this.r = this.s.f(0, this.s.c());
                return this.r
            }
        },
        m: function() {
            $$t.$er.m.call(this);
            this.r = null;
            this.n = 2;
            this.q = this.p = 0
        },
        u: function() {
            if ($.ig.$op.referenceEquals(this.j, "xmlns")) {
                this.o.ef.addNamespace(this.g, this.k())
            } else if ($.ig.$op.referenceEquals(this.h, "xmlns")) {
                this.o.ef.addNamespace(String.empty(), this.k())
            }
        },
        t: function() {
            if ($.ig.$op.referenceEquals(this.j, "xmlns") || $.ig.$op.referenceEquals(this.h, "xmlns")) {
                this.i = "http://www.w3.org/2000/xmlns/"
            } else if (this.j.length == 0) {
                this.i = String.empty()
            } else {
                this.i = this.o.c1(this.j, true)
            }
        },
        $type: new $.ig.Type("XmlTextReader_XmlAttributeTokenInfo", $$t.$er.$type)
    }, true);
    $c("XmlTextReader_TagName:e4", "ValueType", {
        init: function(a) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $.ig.ValueType.prototype.init.call(this)
        },
        init1: function(a, b, c, d) {
            $.ig.ValueType.prototype.init.call(this);
            this.b = b;
            this.a = c;
            this.c = d
        },
        b: null,
        a: null,
        c: null,
        $type: new $.ig.Type("XmlTextReader_TagName", $.ig.ValueType.prototype.$type)
    }, true);
    $c("XmlTextReader_DtdInputStateStack:ey", "Object", {
        a: null,
        init: function() {
            this.a = new $$t.eo;
            $.ig.$op.init.call(this);
            this.b(1)
        },
        c: function() {
            return $f($.ig.util.stackPeek(this.a))
        },
        d: function() {
            return $f(this.a.pop())
        },
        b: function(a) {
            this.a.push($$t.$ex.getBox(a))
        },
        $type: new $.ig.Type("XmlTextReader_DtdInputStateStack", $.ig.$ot)
    }, true);
    $c("XmlWriter:em", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        as: function() {},
        b: function() {},
        at: function() {},
        c: function() {},
        dispose: function(a) {
            this.c()
        },
        disposableDispose: function() {
            this.dispose(false)
        },
        e: function() {},
        a: function(a) {},
        f: function(a, b) {
            if (!b && a.h()) {
                return
            }
            this.aj(a.ak(), a.ag(), a.aj());
            while (a.u()) {
                switch (a.a7()) {
                    case 3:
                        this.ap(a.ar());
                        break;
                    case 5:
                        this.w(a.ai());
                        break
                }
            }
            this.t()
        },
        g: function(a, b) {
            if (a == null) {
                throw new $$t.bf(2, "null XmlReader specified.", "reader")
            }
            var t1 = a.a7();
            L0: while (true) {
                switch (t1) {
                    case 17:
                        this.h("version", a.item1("version"));
                        if (a.item1("encoding") != null) {
                            this.h("encoding", a.item1("encoding"))
                        }
                        if (a.item1("standalone") != null) {
                            this.h("standalone", a.item1("standalone"))
                        }
                        break;
                    case 1:
                        if (a.r()) {
                            t1 = 2;
                            continue L0
                        }
                        break;
                    case 2:
                        do {
                            this.f(a, b)
                        } while (a.s());
                        a.q();
                        break;
                    default:
                        throw new $$t.ea(3, "NodeType is not one of Element, Attribute, nor XmlDeclaration.")
                }
                break
            }
        },
        h: function(a, b) {
            this.j("", a, null, b)
        },
        i: function(a, b, c) {
            this.j("", a, b, c)
        },
        j: function(a, b, c, d) {
            this.aj(a, b, c);
            if (d != null && d.length > 0) {
                this.ap(d)
            }
            this.t()
        },
        k: function(a, b, c) {},
        l: function(a, b, c) {},
        m: function(a) {},
        n: function(a) {},
        o: function(a, b, c) {},
        p: function(a) {},
        q: function(a, b, c, d) {},
        r: function(a, b) {
            this.am(a);
            if (b != null && b.length > 0) {
                this.ap(b)
            }
            this.v()
        },
        s: function(a, b, c) {
            this.an(a, b);
            if (c != null && c.length > 0) {
                this.ap(c)
            }
            this.v()
        },
        t: function() {},
        u: function() {},
        v: function() {},
        w: function(a) {},
        x: function() {},
        y: function(a) {},
        aa: function(a) {},
        ae: function(a, b) {},
        z: function(a) {
            $$t.$d9.aq(a);
            this.ap(a)
        },
        ab: function(a) {
            var b = true;
            b = $$t.$d6.k(a);
            if (!b) {
                throw new $$t.bf(1, "Argument name is not a valid NMTOKEN.")
            }
            this.ap(a)
        },
        af: function(a, b) {
            if (a == null || a == String.empty()) {
                throw new $$t.bf(0)
            }
            if (b == null) {
                b = String.empty()
            }
            $$t.$d9.ar(a);
            var c = b.length > 0 ? this.a(b) : String.empty();
            if (c == null) {
                throw new $$t.bf(1, $5("Namespace '{0}' is not declared.", b))
            }
            if (c != String.empty()) {
                this.ap(c);
                this.ap(":");
                this.ap(a)
            } else {
                this.ap(a)
            }
        },
        ac: function(a, b) {
            if (a == null) {
                throw new $$t.bf(0)
            }
            if (a.a3() == 0) {
                a.t();
                do {
                    this.ac(a, b)
                } while (!a.d());
                return
            }
            var t1 = a.a7();
            L0: while (true) {
                switch (t1) {
                    case 1:
                        this.ao(a.ak(), a.ag(), a.aj());
                        if (a.e()) {
                            for (var c = 0; c < a.w(); c++) {
                                a.aw(c);
                                this.f(a, b)
                            }
                            a.q()
                        }
                        if (a.i()) {
                            this.v()
                        } else {
                            var d = a.x();
                            a.t();
                            if (a.a7() != 15) {
                                do {
                                    this.ac(a, b)
                                } while (d < a.x())
                            }
                            this.x()
                        }
                        break;
                    case 2:
                        return;
                    case 3:
                        this.ap(a.ar());
                        break;
                    case 4:
                        this.m(a.ar());
                        break;
                    case 5:
                        this.w(a.ai());
                        break;
                    case 17:
                    case 7:
                        this.ad(a.ai(), a.ar());
                        break;
                    case 8:
                        this.p(a.ar());
                        break;
                    case 10:
                        this.q(a.ai(), a.item1("PUBLIC"), a.item1("SYSTEM"), a.ar());
                        break;
                    case 14:
                        t1 = 13;
                        continue L0;
                    case 13:
                        this.ar(a.ar());
                        break;
                    case 15:
                        this.x();
                        break;
                    case 16:
                        break;
                    case 0:
                        break;
                    default:
                        throw new $$t.ea(3, "Unexpected node " + a.ai() + " of type " + $$t.$ek.getBox(a.a7()))
                }
                break
            }
            a.t()
        },
        ad: function(a, b) {},
        ah: function(a) {},
        ag: function(a, b, c) {},
        ai: function(a, b) {
            this.aj(null, a, b)
        },
        aj: function(a, b, c) {},
        ak: function() {},
        al: function(a) {},
        am: function(a) {
            this.ao(null, a, null)
        },
        an: function(a, b) {
            this.ao(null, a, b)
        },
        ao: function(a, b, c) {},
        ap: function(a) {},
        aq: function(a, b) {},
        ar: function(a) {},
        $type: new $.ig.Type("XmlWriter", $.ig.$ot, [$$t.$aq.$type])
    }, true);
    $c("XmlTextWriter:el", "XmlWriter", {
        bm: null,
        bp: null,
        bq: null,
        bo: null,
        bv: null,
        a4: false,
        ax: false,
        az: false,
        a0: false,
        a5: false,
        cn: 0,
        ay: false,
        cj: 0,
        a3: false,
        ck: 0,
        cm: 0,
        cl: null,
        bl: 0,
        au: null,
        be: null,
        bd: null,
        ci: 0,
        a1: false,
        bj: 0,
        a9: "\0",
        bs: null,
        bu: null,
        a2: false,
        bb: "\0",
        a7: false,
        init: function(a, b, c) {
            if (a > 0) {
                switch (a) {
                    case 1:
                        this.init1.apply(this, arguments);
                        break
                }
                return
            }
            $$t.$el.init1.call(this, 1, new $$t.dy(1, b, c == null ? $$t.$el.by : c));
            this.a0 = c == null;
            this.b3(this.bq);
            this.ax = true
        },
        init1: function(a, b) {
            this.az = true;
            this.a5 = true;
            this.cn = 0;
            this.cj = 2;
            this.ck = 0;
            this.cm = 0;
            this.au = new Array(10);
            this.be = new $$t.eo;
            this.bd = new $.ig.Array;
            this.bj = 2;
            this.a9 = " ";
            this.bs = "  ";
            this.bb = '"';
            $$t.$em.init.call(this);
            if (b == null) {
                throw new $$t.bd(0, "writer")
            }
            this.a0 = b.h() == null;
            this.b3(b);
            this.ax = true
        },
        b3: function(a) {
            if (a == null) {
                throw new $$t.bd(0, "writer")
            }
            var b = new $$t.c1;
            this.bq = a;
            if ($b($$t.$dy.$type, a) !== null) {
                this.bm = a.a5()
            }
            this.bp = a;
            this.cl = new $$t.ed(b);
            this.bu = a.g();
            $$t.$el.aw = this.cj != 2 ? ["&", "<", ">", "\r", "\n"] : ["&", "<", ">"];
            $$t.$el.av = ['"', "&", "<", ">", "\r", "\n"]
        },
        ch: function(a) {
            if (arguments.length === 1) {
                this.a1 = a == 1;
                return a
            } else {
                return this.a1 ? 1 : 0
            }
        },
        bk: function(a) {
            if (arguments.length === 1) {
                if (a < 0) {
                    throw this.bf("Indentation must be non-negative integer.")
                }
                this.bj = a;
                this.bs = a == 0 ? String.empty() : $.ig.util.createString2(this.a9, this.bj);
                return a
            } else {
                return this.bj
            }
        },
        ba: function(a) {
            if (arguments.length === 1) {
                this.a9 = a;
                this.bs = $.ig.util.createString2(this.a9, this.bj);
                return a
            } else {
                return this.a9
            }
        },
        bc: function(a) {
            if (arguments.length === 1) {
                if (this.ck == 3) {
                    throw this.bh("QuoteChar must not be changed inside attribute value.")
                }
                if (a != "'" && a != '"') {
                    throw this.bf("Only ' and \" are allowed as an attribute quote character.")
                }
                this.bb = a;
                $$t.$el.av[0] = this.bb;
                return a
            } else {
                return this.bb
            }
        },
        b: function() {
            return this.bl == 0 ? null : this.au[this.bl - 1].f
        },
        at: function() {
            return this.bl == 0 ? 0 : this.au[this.bl - 1].g
        },
        as: function() {
            return this.ck
        },
        a: function(a) {
            if (a == null || a == String.empty()) {
                throw this.bf("The Namespace cannot be empty.")
            }
            if (a == this.cl.defaultNamespace()) {
                return String.empty()
            }
            var b = this.cl.s(a, false);
            return b
        },
        bn: function() {
            return this.bm
        },
        c: function() {
            if (this.ck == 3) {
                this.t()
            }
            while (this.bl > 0) {
                this.v()
            }
            if (this.az) {
                this.bq.i()
            } else {
                this.bq.k()
            }
            this.ck = 5
        },
        e: function() {
            this.bq.k()
        },
        a6: function(a) {
            if (arguments.length === 1) {
                if (this.ck != 0) {
                    throw this.bh("This property must be set before writing output.")
                }
                this.a5 = a;
                return a
            } else {
                return this.a5
            }
        },
        ak: function() {
            this.cg(false, false);
            this.a3 = true
        },
        al: function(a) {
            this.cg(true, a);
            this.a3 = true
        },
        cg: function(a, b) {
            if (this.ck != 0) {
                throw this.bi("XmlDeclaration")
            }
            switch (this.cn) {
                case 1:
                    return;
                case 3:
                    throw this.bh("WriteStartDocument cannot be called when ConformanceLevel is Fragment.")
            }
            this.ck = 1;
            this.bq.v("<?xml version=");
            this.bq.o(this.bb);
            this.bq.v("1.0");
            this.bq.o(this.bb);
            if (!this.a0) {
                this.bq.v(" encoding=");
                this.bq.o(this.bb);
                this.bq.v(this.bq.h().webName());
                this.bq.o(this.bb)
            }
            if (a) {
                this.bq.v(" standalone=");
                this.bq.o(this.bb);
                this.bq.v(b ? "yes" : "no");
                this.bq.o(this.bb)
            }
            this.bq.v("?>");
            this.cn = 1
        },
        u: function() {
            switch (this.ck) {
                case 5:
                case 0:
                    throw this.bi("EndDocument")
            }
            if (this.ck == 3) {
                this.t()
            }
            while (this.bl > 0) {
                this.v()
            }
            this.ck = 0;
            this.a3 = false
        },
        q: function(a, b, c, d) {
            if (a == null) {
                throw this.bf("name")
            }
            if (!$$t.$d6.g(a)) {
                throw this.bf("name")
            }
            if (this.cm != 0) {
                throw this.bi("DocType")
            }
            this.cm = 10;
            if (this.cn == 2) {
                this.b4()
            }
            this.cd();
            this.bq.v("<!DOCTYPE ");
            this.bq.v(a);
            if (b != null) {
                this.bq.v(" PUBLIC ");
                this.bq.o(this.bb);
                this.bq.v(b);
                this.bq.o(this.bb);
                this.bq.o(" ");
                this.bq.o(this.bb);
                if (c != null) {
                    this.bq.v(c)
                }
                this.bq.o(this.bb)
            } else if (c != null) {
                this.bq.v(" SYSTEM ");
                this.bq.o(this.bb);
                this.bq.v(c);
                this.bq.o(this.bb)
            }
            if (d != null) {
                this.bq.v("[");
                this.bq.v(d);
                this.bq.v("]")
            }
            this.bq.o(">");
            this.ck = 1
        },
        ao: function(a, b, c) {
            if (this.ck == 5) {
                throw this.bi("StartTag")
            }
            this.cm = 1;
            var d = a == null;
            if (a == null) {
                a = String.empty()
            }
            if (!this.a5 && c != null && c.length > 0) {
                throw this.bf("Namespace is disabled in this XmlTextWriter.")
            }
            if (!this.a5 && a.length > 0) {
                throw this.bf("Namespace prefix is disabled in this XmlTextWriter.")
            }
            if (a.length > 0 && c == null) {
                c = this.cl.lookupNamespace1(a, false);
                if (c == null || c.length == 0) {
                    throw this.bf("Namespace URI must not be null when prefix is not an empty string.")
                }
            }
            if (this.a5 && a != null && a.length == 3 && c != "http://www.w3.org/XML/1998/namespace" && (a.charAt(0) == "x" || a.charAt(0) == "X") && (a.charAt(1) == "m" || a.charAt(1) == "M") && (a.charAt(2) == "l" || a.charAt(2) == "L")) {
                throw new $$t.bf(1, 'A prefix cannot be equivalent to "xml" in case-insensitive match.')
            }
            if (this.cn == 2) {
                this.b4()
            }
            if (this.ck == 2) {
                this.b1()
            }
            if (this.bl > 0) {
                this.au[this.bl - 1].a = true
            }
            this.cl.pushScope();
            if (this.a5 && c != null) {
                if (d && c.length > 0) {
                    a = this.a(c)
                }
                if (a == null || c.length == 0) {
                    a = String.empty()
                }
            }
            this.cd();
            this.bq.v("<");
            if (a.length > 0) {
                this.bq.v(a);
                this.bq.o(":")
            }
            this.bq.v(b);
            if (this.au.length == this.bl) {
                var e = new Array(this.bl << 1);
                $.ig.util.arrayCopy2(this.au, e, this.bl);
                this.au = e
            }
            if (this.au[this.bl] == null) {
                this.au[this.bl] = new $$t.en
            }
            var f = this.au[this.bl];
            f.e = a;
            f.c = b;
            f.d = c;
            f.b = false;
            f.a = false;
            f.f = this.b();
            f.g = this.at();
            this.bl++;
            if (this.a5 && c != null) {
                var g = this.cl.lookupNamespace1(a, false);
                if (g != c) {
                    this.cl.addNamespace(a, c);
                    this.be.push(a)
                }
            }
            this.ck = 2
        },
        b1: function() {
            this.b2();
            if (this.ck == 2) {
                this.bq.o(">")
            }
            this.ck = 4
        },
        b2: function() {
            if (this.ck == 3) {
                this.t()
            }
            if (this.be.length == 0) {
                if (this.bd.length > 0) {
                    this.bd.clear()
                }
                return
            }
            var a = this.bd.length;
            while (this.be.length > 0) {
                var b = this.be.pop();
                var c = false;
                for (var d = 0; d < this.bd.length; d++) {
                    if (this.bd[d] == b) {
                        c = true;
                        break
                    }
                }
                if (c) {
                    continue
                }
                this.bd.add(b)
            }
            for (var e = a; e < this.bd.length; e++) {
                var f = this.bd[e];
                var g = this.cl.lookupNamespace1(f, false);
                if (g == null) {
                    continue
                }
                if (f.length > 0) {
                    this.bq.v(" xmlns:");
                    this.bq.v(f)
                } else {
                    this.bq.v(" xmlns")
                }
                this.bq.o("=");
                this.bq.o(this.bb);
                this.cc(g, true);
                this.bq.o(this.bb)
            }
            this.bd.clear()
        },
        v: function() {
            this.ca(false)
        },
        x: function() {
            this.ca(true)
        },
        ca: function(a) {
            if (this.ck == 5) {
                throw this.bi("EndElement")
            }
            if (this.bl == 0) {
                throw this.bh("There is no more open element.")
            }
            this.b2();
            this.cl.popScope();
            if (this.ck == 2) {
                if (a) {
                    this.bq.o(">")
                } else {
                    this.bq.v(" />")
                }
            }
            if (a || this.ck == 4) {
                this.cf()
            }
            var b = this.au[--this.bl];
            if (a || this.ck == 4) {
                this.bq.v("</");
                if (b.e.length > 0) {
                    this.bq.v(b.e);
                    this.bq.o(":")
                }
                this.bq.v(b.c);
                this.bq.o(">")
            }
            this.ck = 4;
            if (this.bl == 0) {
                this.cm = 15
            }
        },
        aj: function(a, b, c) {
            if (this.ck == 3) {
                this.t()
            }
            if (this.ck != 2 && this.ck != 0) {
                throw this.bi("Attribute")
            }
            if (a == null) {
                a = String.empty()
            }
            var d = false;
            if (c == "http://www.w3.org/2000/xmlns/") {
                d = true;
                if (a.length == 0 && b != "xmlns") {
                    a = "xmlns"
                }
            } else {
                d = a == "xmlns" || b == "xmlns" && a.length == 0
            }
            if (d) {
                if (b == null || b.length == 0) {
                    b = a;
                    a = String.empty()
                }
            }
            if (this.a5) {
                if (a == "xml") {
                    c = "http://www.w3.org/XML/1998/namespace"
                } else if (c == null || this.a7 && c.length == 0) {
                    if (d) {
                        c = "http://www.w3.org/2000/xmlns/"
                    } else {
                        c = String.empty()
                    }
                }
                if (d && c != "http://www.w3.org/2000/xmlns/") {
                    throw this.bf($5("The 'xmlns' attribute is bound to the reserved namespace '{0}'", "http://www.w3.org/2000/xmlns/"))
                }
                if (a.length > 0 && c.length == 0) {
                    c = this.cl.lookupNamespace1(a, false);
                    if (c == null || c.length == 0) {
                        throw this.bf("Namespace URI must not be null when prefix is not an empty string.")
                    }
                }
                if (!d && c.length > 0) {
                    a = this.br(a, b, c)
                }
            }
            if (this.a2) {
                this.ce()
            } else if (this.ck != 0) {
                this.bq.o(" ")
            }
            if (a.length > 0) {
                this.bq.v(a);
                this.bq.o(":")
            }
            this.bq.v(b);
            this.bq.o("=");
            this.bq.o(this.bb);
            if (d || a == "xml") {
                if (this.bo == null) {
                    this.bo = new $$t.d2(0)
                } else {
                    this.bo.av().c(0)
                }
                this.bq = this.bo;
                if (!d) {
                    this.a4 = false;
                    this.bv = b
                } else {
                    this.a4 = true;
                    this.bv = b == "xmlns" ? String.empty() : b
                }
            }
            this.ck = 3
        },
        br: function(a, b, c) {
            var d = false;
            if (a.length == 0) {
                a = this.a(c);
                if (a != null && a.length > 0) {
                    return a
                }
                d = true
            } else {
                a = this.cl.nameTable().b(a);
                var e = this.cl.lookupNamespace1(a, true);
                if (e == c) {
                    return a
                }
                if (e != null) {
                    this.cl.removeNamespace(a, e);
                    if (this.cl.lookupNamespace1(a, true) != e) {
                        d = true;
                        this.cl.addNamespace(a, e)
                    }
                }
            }
            if (d) {
                a = this.bt(c, true)
            }
            this.be.push(a);
            this.cl.addNamespace(a, c);
            return a
        },
        bt: function(a, b) {
            var c = b ? null : this.a(a);
            if (c != null && c.length > 0) {
                return c
            }
            for (var d = 1;; d++) {
                c = $$t.$eq.e("d{0}p{1}", [this.bl, d]);
                if ($.ig.util.stackContains(this.be, c)) {
                    continue
                }
                if (null != this.cl.lookupNamespace(this.cl.nameTable().d(c))) {
                    continue
                }
                this.cl.addNamespace(c, a);
                this.be.push(c);
                return c
            }
        },
        t: function() {
            if (this.ck != 3) {
                throw this.bi("End of attribute")
            }
            if (this.bq == this.bo) {
                this.bq = this.bp;
                var a = this.bo.toString();
                if (this.a4) {
                    if (this.bv.length > 0 && a.length == 0) {
                        throw this.bf("Non-empty prefix must be mapped to non-empty namespace URI.")
                    }
                    var b = this.cl.lookupNamespace1(this.bv, false);
                    if ((this.ci & 1) == 0 || b != a) {
                        this.bd.add(this.bv)
                    }
                    if (this.bl > 0) {
                        if (this.a7 && this.au[this.bl - 1].e == this.bv && this.au[this.bl - 1].d != a) {
                            throw new $$t.ea(3, $5("Cannot redefine the namespace for prefix '{0}' used at current element", this.bv))
                        }
                        if (this.au[this.bl - 1].d == String.empty() && this.au[this.bl - 1].e == this.bv) {} else if (b != a) {
                            this.cl.addNamespace(this.bv, a)
                        }
                    }
                } else {
                    switch (this.bv) {
                        case "lang":
                            if (this.bl > 0) {
                                this.au[this.bl - 1].f = a
                            }
                            break;
                        case "space":
                            switch (a) {
                                case "default":
                                    if (this.bl > 0) {
                                        this.au[this.bl - 1].g = 1
                                    }
                                    break;
                                case "preserve":
                                    if (this.bl > 0) {
                                        this.au[this.bl - 1].g = 2
                                    }
                                    break;
                                default:
                                    throw this.bf("Invalid value for xml:space.")
                            }
                            break
                    }
                }
                this.bq.v(a)
            }
            this.bq.o(this.bb);
            this.ck = 2
        },
        p: function(a) {
            if (a == null) {
                throw this.bf("text")
            }
            if (a.length > 0 && a.charAt(a.length - 1) == "-") {
                throw this.bf("An input string to WriteComment method must not end with '-'. Escape it with '&#2D;'.")
            }
            if ($$t.$eq.d(a, "--") > 0) {
                throw this.bf('An XML comment cannot end with "-".')
            }
            if (this.ck == 3 || this.ck == 2) {
                this.b1()
            }
            this.cd();
            this.b6("Comment", false, false, false);
            this.bq.v("<!--");
            this.bq.v(a);
            this.bq.v("-->")
        },
        ad: function(a, b) {
            if (a == null) {
                throw this.bf("name")
            }
            if (b == null) {
                throw this.bf("text")
            }
            this.cd();
            if (!$$t.$d6.g(a)) {
                throw this.bf("A processing instruction name must be a valid XML name.")
            }
            if ($$t.$eq.d(b, "?>") > 0) {
                throw this.bf('Processing instruction cannot contain "?>" as its value.')
            }
            this.b6("ProcessingInstruction", false, a == "xml", false);
            this.bq.v("<?");
            this.bq.v(a);
            this.bq.o(" ");
            this.bq.v(b);
            this.bq.v("?>");
            if (this.ck == 0) {
                this.ck = 1
            }
        },
        ar: function(a) {
            if (a == null) {
                throw this.bf("text")
            }
            if (a.length == 0 || $$t.$d6.u(a) >= 0) {
                throw this.bf("WriteWhitespace method accepts only whitespaces.")
            }
            this.b6("Whitespace", true, false, true);
            this.bq.v(a)
        },
        m: function(a) {
            if (a == null) {
                a = String.empty()
            }
            this.b5("CData", false);
            if ($$t.$eq.d(a, "]]>") >= 0) {
                throw this.bf("CDATA section must not contain ']]>'.")
            }
            this.bq.v("<![CDATA[");
            this.b9(a);
            this.bq.v("]]>")
        },
        ap: function(a) {
            if (a == null || a.length == 0 && !this.a7) {
                return
            }
            this.b5("Text", true);
            this.cc(a, this.ck == 3)
        },
        ah: function(a) {
            if (a == null) {
                return
            }
            this.b6("Raw string", true, true, true);
            this.bq.v(a)
        },
        n: function(a) {
            this.b7(a, "\0", false)
        },
        aq: function(a, b) {
            this.b7(a, b, true)
        },
        b7: function(a, b, c) {
            if (c && ("�".charCodeAt(0) > b.charCodeAt(0) || b.charCodeAt(0) > "�".charCodeAt(0) || "�".charCodeAt(0) > a.charCodeAt(0) || a.charCodeAt(0) > "�".charCodeAt(0))) {
                throw this.bf($5("Invalid surrogate pair was found. Low: &#x{0:X}; High: &#x{0:X};", a.charCodeAt(0), b.charCodeAt(0)))
            } else if (this.ay && $$t.$d6.f(a.charCodeAt(0))) {
                throw this.bf($5("Invalid character &#x{0:X};", a.charCodeAt(0)))
            }
            this.b5("Character", true);
            var d = c ? (b.charCodeAt(0) - 55296) * 1024 + a.charCodeAt(0) - 56320 + 65536 : a.charCodeAt(0);
            this.bq.v("&#x");
            this.bq.v($aj(d, "X", $$t.$ad.invariantCulture()));
            this.bq.o(";")
        },
        w: function(a) {
            if (a == null) {
                throw this.bf("name")
            }
            if (!$$t.$d6.g(a)) {
                throw this.bf("Argument name must be a valid XML name.")
            }
            this.b5("Entity reference", true);
            this.bq.o("&");
            this.bq.v(a);
            this.bq.o(";")
        },
        y: function(a) {
            if (a == null) {
                throw this.bf("name")
            }
            if (!$$t.$d6.g(a)) {
                throw this.bf("Not a valid name string.")
            }
            this.ap(a)
        },
        aa: function(a) {
            if (a == null) {
                throw this.bf("nmtoken")
            }
            if (!$$t.$d6.k(a)) {
                throw this.bf("Not a valid NMTOKEN string.")
            }
            this.ap(a)
        },
        ae: function(a, b) {
            if (a == null) {
                throw this.bf("localName")
            }
            if (b == null) {
                b = String.empty()
            }
            if (b == "http://www.w3.org/2000/xmlns/") {
                throw this.bf("Prefix 'xmlns' is reserved and cannot be overriden.")
            }
            if (!$$t.$d6.i(a)) {
                throw this.bf("localName must be a valid NCName.")
            }
            this.b5("QName", true);
            var c = b.length > 0 ? this.a(b) : String.empty();
            if (c == null) {
                if (this.ck == 3) {
                    c = this.bt(b, false)
                } else {
                    throw this.bf($5("Namespace '{0}' is not declared.", b))
                }
            }
            if (c != String.empty()) {
                this.bq.v(c);
                this.bq.v(":")
            }
            this.bq.v(a)
        },
        bz: function(a, b, c) {
            if (a == null) {
                throw new $$t.bd(0, "buffer")
            }
            if (b < 0 || a.length < b) {
                throw this.bg("index")
            }
            if (c < 0 || a.length < b + c) {
                throw this.bg("count")
            }
        },
        k: function(a, b, c) {
            throw new $$t.be(1, "WriteBase64 not implemented")
        },
        l: function(a, b, c) {
            this.bz(a, b, c);
            this.b5("BinHex", true);
            $$t.$d9.ay(a, b, c, this.bq)
        },
        o: function(a, b, c) {
            this.bz(a, b, c);
            this.b5("Chars", true);
            this.cb(a, b, c, this.ck == 3)
        },
        ag: function(a, b, c) {
            this.bz(a, b, c);
            this.b5("Raw text", false);
            this.bq.m(a, b, c)
        },
        cd: function() {
            this.a8(0, false)
        },
        cf: function() {
            this.a8(-1, false)
        },
        ce: function() {
            if (!this.a8(0, true)) {
                this.bq.o(" ")
            }
        },
        a8: function(a, b) {
            if (!this.a1) {
                return false
            }
            for (var c = this.bl - 1; c >= 0; c--) {
                if (!b && this.au[c].b) {
                    return false
                }
            }
            if (this.ck != 0) {
                this.bq.v(this.bu)
            }
            for (var d = 0; d < this.bl + a; d++) {
                this.bq.v(this.bs)
            }
            return true
        },
        b4: function() {
            if (this.ck != 0) {
                return
            }
            this.cg(false, false)
        },
        b6: function(a, b, c, d) {
            var t1 = this.ck;
            L0: while (true) {
                switch (t1) {
                    case 5:
                        throw this.bi(a);
                    case 0:
                        if (d) {
                            this.b0()
                        }
                        if (this.cn == 2 && !c) {
                            this.b4()
                        }
                        this.ck = 1;
                        break;
                    case 3:
                        if (b) {
                            break
                        }
                        t1 = 5;
                        continue L0;
                    case 2:
                        if (d) {
                            this.b0()
                        }
                        this.b1();
                        break;
                    case 4:
                        if (d) {
                            this.b0()
                        }
                        break
                }
                break
            }
        },
        b0: function() {
            if (this.bl > 0) {
                this.au[this.bl - 1].b = true
            }
        },
        b5: function(a, b) {
            var t1 = this.ck;
            L0: while (true) {
                switch (t1) {
                    case 5:
                        throw this.bi(a);
                    case 1:
                    case 0:
                        if (!this.ax || this.a3) {
                            t1 = 5;
                            continue L0
                        }
                        if (this.cn == 2) {
                            this.b4()
                        }
                        this.b0();
                        this.ck = 4;
                        break;
                    case 3:
                        if (b) {
                            break
                        }
                        t1 = 5;
                        continue L0;
                    case 2:
                        this.b1();
                        this.b0();
                        break;
                    case 4:
                        this.b0();
                        break
                }
                break
            }
        },
        cc: function(a, b) {
            var c = b ? $$t.$el.av : $$t.$el.aw;
            var d = a.indexOfAny(c);
            if (d >= 0) {
                var e = $.ig.util.toCharArray(a);
                this.b8(e, 0, d);
                this.cb(e, d, e.length - d, b)
            } else {
                this.b9(a)
            }
        },
        b9: function(a) {
            var b = $$t.$d6.t(a, true);
            if (b >= 0) {
                var c = $.ig.util.toCharArray(a);
                this.bq.m(c, 0, b);
                this.b8(c, b, c.length - b)
            } else {
                this.bq.v(a)
            }
        },
        b8: function(a, b, c) {
            var d = b;
            var e = b + c;
            while ((b = $$t.$d6.s(a, d, c, true)) >= 0) {
                if (this.ay) {
                    throw this.bf($5("Input contains invalid character at {0} : &#x{1:X};", b, a[b].charCodeAt(0)))
                }
                if (d < b) {
                    this.bq.m(a, d, b - d)
                }
                this.bq.v("&#x");
                this.bq.v($aj(a[b].charCodeAt(0), "X", $$t.$ad.invariantCulture()));
                this.bq.o(";");
                c -= b - d + 1;
                d = b + 1
            }
            if (d < e) {
                this.bq.m(a, d, e - d)
            }
        },
        cb: function(a, b, c, d) {
            var e = b;
            var f = b + c;
            L0: for (var g = e; g < f; g++) {
                var t1 = a[g];
                L1: while (true) {
                    switch (t1) {
                        default: continue L0;
                        case "&":
                                case "<":
                                case ">":
                                if (e < g) {
                                this.b8(a, e, g - e)
                            }this.bq.o("&");
                            switch (a[g]) {
                                case "&":
                                    this.bq.v("amp;");
                                    break;
                                case "<":
                                    this.bq.v("lt;");
                                    break;
                                case ">":
                                    this.bq.v("gt;");
                                    break;
                                case "'":
                                    this.bq.v("apos;");
                                    break;
                                case '"':
                                    this.bq.v("quot;");
                                    break
                            }
                            break;
                        case '"':
                                case "'":
                                if (d && a[g] == this.bb) {
                                t1 = "&";
                                continue L1
                            }continue L0;
                        case "\r":
                                if (g + 1 < f && a[g] == "\n") {
                                g++
                            }t1 = "\n";
                            continue L1;
                        case "\n":
                                if (e < g) {
                                this.b8(a, e, g - e)
                            }if (d) {
                                this.bq.v(a[g] == "\r" ? "&#xD;" : "&#xA;");
                                break
                            }
                            switch (this.cj) {
                                case 1:
                                    this.bq.v(a[g] == "\r" ? "&#xD;" : "&#xA;");
                                    break;
                                case 0:
                                    this.bq.v(this.bu);
                                    break;
                                default:
                                    this.bq.o(a[g]);
                                    break
                            }
                            break
                    }
                    break
                }
                e = g + 1
            }
            if (e < f) {
                this.b8(a, e, f - e)
            }
        },
        bg: function(a) {
            return new $$t.bg(1, a)
        },
        bf: function(a) {
            return new $$t.bf(1, a)
        },
        bh: function(a) {
            return new $$t.cv(1, a)
        },
        bi: function(a) {
            return this.bh($5("This XmlWriter does not accept {0} at this state {1}.", a, $$t.$d5.getBox(this.ck)))
        },
        $type: new $.ig.Type("XmlTextWriter", $$t.$em.$type)
    }, true);
    $c("XmlTextWriter_XmlNodeInfo:en", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        e: null,
        c: null,
        d: null,
        b: false,
        a: false,
        f: null,
        g: 0,
        $type: new $.ig.Type("XmlTextWriter_XmlNodeInfo", $.ig.$ot)
    }, true);
    $c("XmlTextWriter_StringUtil:eq", "Object", {
        init: function() {
            $.ig.$op.init.call(this)
        },
        d: function(a, b) {
            return $$t.$eq.a.indexOf1(a, b)
        },
        c: function(a, b) {
            return $$t.$eq.a.compare4(a, b)
        },
        e: function(a, b) {
            return $7($$t.$eq.b, a, b)
        },
        $type: new $.ig.Type("XmlTextWriter_StringUtil", $.ig.$ot)
    }, true);
    $c("XmlUrlResolver:e0", "XmlResolver", {
        e: null,
        init: function() {
            $$t.$es.init.call(this)
        },
        a: function(a) {
            this.e = a;
            return a
        },
        b: function(a, b, c) {
            throw new $$t.be(0)
        },
        f: function(a) {
            return $4($4($4($4($4($4(a, "%3C", "<"), "%3E", ">"), "%23", "#"), "%22", '"'), "%20", " "), "%25", "%")
        },
        $type: new $.ig.Type("XmlUrlResolver", $$t.$es.$type)
    }, true);
    $$t.$ep.allow = 0;
    $$t.$ep.ignore = 1;
    $$t.$ep.auto = 2;
    $$t.$ep.prohibit = 3;
    $$t.$ex.free = 1;
    $$t.$ex.elementDecl = 2;
    $$t.$ex.attlistDecl = 3;
    $$t.$ex.entityDecl = 4;
    $$t.$ex.notationDecl = 5;
    $$t.$ex.pI = 6;
    $$t.$ex.comment = 7;
    $$t.$ex.insideSingleQuoted = 8;
    $$t.$ex.insideDoubleQuoted = 9;
    $$t.$eh.none = 0;
    $$t.$eh.$default = 1;
    $$t.$eh.preserve = 2;
    $$t.$de.all = 0;
    $$t.$de.excludeXml = 1;
    $$t.$de.local = 2;
    $$t.$d5.start = 0;
    $$t.$d5.prolog = 1;
    $$t.$d5.element = 2;
    $$t.$d5.attribute = 3;
    $$t.$d5.content = 4;
    $$t.$d5.closed = 5;
    $$t.$d4.all = 0;
    $$t.$d4.significant = 1;
    $$t.$d4.none = 2;
    $$t.$dg.unrestricted = 1;
    $$t.$dg.none = 0;
    $$t.$c8.demand = 2;
    $$t.$c8.assert = 3;
    $$t.$c8.deny = 4;
    $$t.$c8.permitOnly = 5;
    $$t.$c8.linkDemand = 6;
    $$t.$c8.inheritanceDemand = 7;
    $$t.$c8.requestMinimum = 8;
    $$t.$c8.requestOptional = 9;
    $$t.$c8.requestRefuse = 10;
    $$t.$c7.initial = 0;
    $$t.$c7.interactive = 1;
    $$t.$c7.error = 2;
    $$t.$c7.endOfFile = 3;
    $$t.$c7.closed = 4;
    $$t.$c4.replace = 0;
    $$t.$c4.entitize = 1;
    $$t.$c4.none = 2;
    $$t.$cz.$default = 0;
    $$t.$cz.omitDuplicates = 1;
    $$t.$bv.none = 0;
    $$t.$bv.indented = 1;
    $$t.$bu.expandEntities = 1;
    $$t.$bu.expandCharEntities = 2;
    $$t.$bm.b = new $$t.bo;
    $$t.$bm.d = new $$t.br(0);
    $$t.$bm.f = new $$t.br(1, "�");
    $$t.$c1.h = 2 << 6;
    $$t.$c6.altDirectorySeparatorChar = "/";
    $$t.$c6.directorySeparatorChar = "\\";
    $$t.$c6.pathSeparator = ";";
    $$t.$c6.volumeSeparatorChar = ":";
    $$t.$dn.d = new $$t.dx;
    $$t.$dy.a2 = 1024;
    $$t.$dy.a3 = 4096;
    $$t.$dy.a4 = 256;
    $$t.$dy.a7 = new $$t.dy(2, new $$t.dm, $$t.$dp.uTF8Unmarked(), 1);
    $$t.$d6.d = [" ", "\n", "	", "\r"];
    $$t.$d6.a = [2, 3, 4, 5, 6, 7, 8, 0, 0, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $$t.$d6.c = [25, 3, 26, 27, 28, 29, 30, 0, 0, 31, 32, 33, 34, 35, 36, 37, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 38, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    $$t.$d6.b = [0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 0, 67108864, 2281701374, 134217726, 0, 0, 4286578687, 4286578687, 4294967295, 2146697215, 4294966782, 2147483647, 4294967295, 4294967295, 4294959119, 4231135231, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 3, 0, 0, 0, 0, 0, 4294956864, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901763, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 127, 0, 4294901760, 460799, 0, 134217726, 2046, 4294836224, 4294967295, 2097151999, 3112959, 96, 4294967264, 603979775, 4278190080, 3, 4294549472, 63307263, 2952790016, 196611, 4294543328, 57540095, 1577058304, 1835008, 4294684640, 602799615, 0, 1, 4294549472, 600702463, 2952790016, 3, 3594373088, 62899992, 0, 0, 4294828e3, 66059775, 0, 3, 4294828e3, 66059775, 1073741824, 3, 4294828e3, 67108351, 0, 3, 0, 0, 0, 0, 4294967294, 884735, 63, 0, 4277151126, 537750702, 31, 0, 0, 0, 4294967039, 1023, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294901823, 8388607, 514797, 1342177280, 2184269825, 2908843, 1073741824, 4118857984, 7, 33622016, 4294967295, 4294967295, 4294967295, 4294967295, 268435455, 4294967295, 4294967295, 67108863, 1061158911, 4294967295, 2868854591, 1073741823, 4294967295, 1608515583, 265232348, 534519807, 0, 19520, 0, 0, 7, 0, 0, 0, 128, 1022, 4294967294, 4294967295, 2097151, 4294967294, 4294967295, 134217727, 4294967264, 8191, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 63, 0, 0, 4294967295, 4294967295, 4294967295, 4294967295, 4294967295, 15, 0, 0, 0, 134176768, 2281701374, 134217726, 0, 8388608, 4286578687, 4286578687, 16777215, 0, 4294901760, 4294967295, 4294967295, 4160750079, 196611, 0, 4294967295, 4294967295, 63, 3, 4294956992, 4294967291, 1417641983, 1048573, 4294959102, 4294967295, 3758030847, 4294967295, 4294901883, 4294967295, 4294908319, 54513663, 0, 4294836224, 41943039, 4294967294, 4294836351, 3154116603, 4294901782, 460799, 0, 134217726, 524287, 4294902783, 4294967295, 2097151999, 4293885951, 67059199, 4294967278, 4093640703, 4280172543, 65487, 4294549486, 3552968191, 2961193375, 262095, 4294543332, 3547201023, 1577073031, 2097088, 4294684654, 4092460543, 15295, 65473, 4294549486, 4090363391, 2965387663, 65475, 3594373100, 3284125464, 8404423, 65408, 4294828014, 3287285247, 6307295, 65475, 4294828012, 3287285247, 1080049119, 65475, 4294828012, 3288333823, 8404431, 65475, 0, 0, 0, 0, 4294967294, 134184959, 67076095, 0, 4277151126, 1006595246, 67059551, 0, 50331648, 3265266687, 4294967039, 4294837247, 4273934303, 50216959, 0, 0, 0, 0, 0, 0, 0, 0, 536805376, 2, 160, 4128766, 4294967294, 4294967295, 1713373183, 4294967294, 4294967295, 2013265919];
    $$t.$d9.t = "_x003A_";
    $$t.$d9.j = 256 | 128 | 32 | 4 | 1 | 2;
    $$t.$d9.k = 7 | 1 | 2;
    $$t.$d9.a = ["yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fzzz", "yyyy-MM-ddTHH:mm:ss.ffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:ss.ffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffzzz", "yyyy-MM-ddTHH:mm:ss.ffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ss.fZ", "yyyy-MM-ddTHH:mm:ss.ffZ", "yyyy-MM-ddTHH:mm:ss.fffZ", "yyyy-MM-ddTHH:mm:ss.ffffZ", "yyyy-MM-ddTHH:mm:ss.fffffZ", "yyyy-MM-ddTHH:mm:ss.ffffffZ", "yyyy-MM-ddTHH:mm:ss.fffffffZ", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm:ss.f", "yyyy-MM-ddTHH:mm:ss.ff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mm:ss.ffff", "yyyy-MM-ddTHH:mm:ss.fffff", "yyyy-MM-ddTHH:mm:ss.ffffff", "yyyy-MM-ddTHH:mm:ss.fffffff", "HH:mm:ss", "HH:mm:ss.f", "HH:mm:ss.ff", "HH:mm:ss.fff", "HH:mm:ss.ffff", "HH:mm:ss.fffff", "HH:mm:ss.ffffff", "HH:mm:ss.fffffff", "HH:mm:sszzz", "HH:mm:ss.fzzz", "HH:mm:ss.ffzzz", "HH:mm:ss.fffzzz", "HH:mm:ss.ffffzzz", "HH:mm:ss.fffffzzz", "HH:mm:ss.ffffffzzz", "HH:mm:ss.fffffffzzz", "HH:mm:ssZ", "HH:mm:ss.fZ", "HH:mm:ss.ffZ", "HH:mm:ss.fffZ", "HH:mm:ss.ffffZ", "HH:mm:ss.fffffZ", "HH:mm:ss.ffffffZ", "HH:mm:ss.fffffffZ", "yyyy-MM-dd", "yyyy-MM-ddzzz", "yyyy-MM-ddZ", "yyyy-MM", "yyyy-MMzzz", "yyyy-MMZ", "yyyy", "yyyyzzz", "yyyyZ", "--MM-dd", "--MM-ddzzz", "--MM-ddZ", "---dd", "---ddzzz", "---ddZ"];
    $$t.$ec.d = 2148734263;
    $$t.$ea.j = "Xml_DefaultException";
    $$t.$ea.k = "Xml_UserException";
    $$t.$ed.v = "http://www.w3.org/XML/1998/namespace";
    $$t.$ed.w = "http://www.w3.org/2000/xmlns/";
    $$t.$ed.t = "xml";
    $$t.$ed.u = "xmlns";
    $$t.$e2.q = 1024;
    $$t.$e2.r = 4096;
    $$t.$e2.t = 128;
    $$t.$e1.ad = new $$t.ea(3, "invalid data.");
    $$t.$e3.strictUTF8 = null;
    $$t.$e3.z = new $$t.ea(3, "invalid encoding specification.");
    if ($$t.$e3.staticInit && !$$t.$e3.xmlInputStreamStaticInitCalled) {
        $$t.$e3.staticInit();
        $$t.$e3.xmlInputStreamStaticInitCalled = true
    }
    $$t.$ei.cj = 1024;
    $$t.$el.bw = "http://www.w3.org/XML/1998/namespace";
    $$t.$el.bx = "http://www.w3.org/2000/xmlns/";
    $$t.$el.by = new $$t.dq(0, false, false);
    $$t.$el.aw = null;
    $$t.$el.av = null;
    $$t.$eq.b = $$t.$ad.invariantCulture();
    $$t.$eq.a = $$t.$ad.invariantCulture().compareInfo()
})(jQuery);
(function($) {
    $(document).ready(function() {
        var wm = $("#__ig_wm__").length > 0 ? $("#__ig_wm__") : $('<div id="__ig_wm__"></div>').appendTo(document.body);
        wm.css({
            position: "fixed",
            bottom: 0,
            right: 0,
            zIndex: 1e3
        }).addClass("ui-igtrialwatermark")
    })
})(jQuery);