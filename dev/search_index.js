var documenterSearchIndex = {"docs":
[{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [Jets]\nOrder   = [:function, :type]","category":"page"},{"location":"reference/#Base.:*-Tuple{Jop,AbstractArray}","page":"Reference","title":"Base.:*","text":":*(F, m)\n\nConstructs F*m where F is a Jets linear (e.g. JopLn) or nonlinear (JopNl) operator.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.:+-Tuple{Union{JopAdjoint, JopLn},Union{JopAdjoint, JopLn}}","page":"Reference","title":"Base.:+","text":":+(A₂, A₁)\n\nConstruct and return the linear combination of the two Jets operators A₁::Jop and A₂::Jop. Note that A₁ and A₂ must have consistent (same size and type) domains and ranges.\n\nExample\n\nA = 1.0*A₁ - 2.0*A₂ + 3.0*A₃\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.:--Tuple{Union{JopAdjoint, JopLn},Union{JopAdjoint, JopLn}}","page":"Reference","title":"Base.:-","text":":-(A₂, A₁)\n\nConstruct and return the linear combination of the two Jets operators A₁::Jop and A₂::Jop. Note that A₁ and A₂ must have consistent (same size and type) domains and ranges.\n\nExample\n\nA = 1.0*A₁ - 2.0*A₂ + 3.0*A₃\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.:∘-Tuple{Union{JopAdjoint, JopLn},Union{JopAdjoint, JopLn}}","page":"Reference","title":"Base.:∘","text":":∘(A₂, A₁)\n\nConstruct the composition of the two Jets operators.  Note that when applying the composition operator, operators are applied in order from right to left: first A₁ and then A₂.\n\nExample\n\nusing Jets\ndg!(d,m;mₒ) = @. d = 2*m\nA₁ = JopLn(Jet(;dom=JetSpace(Float64,2), rng=JetSpace(Float64,2), df! = dg!))\nA₂ = JopLn(Jet(;dom=JetSpace(Float64,2), rng=JetSpace(Float64,2), df! = dg!))\nC = A₂ ∘ A₁\nm = rand(domain(C))\nd = C * m\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.adjoint-Tuple{JopLn}","page":"Reference","title":"Base.adjoint","text":"adjoint(A::Union{JopLn, JopAdjoint})\n\nReturn the adjoint of A.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.convert-Union{Tuple{T}, Tuple{Type{T},Jop}} where T<:Array","page":"Reference","title":"Base.convert","text":"convert(Array, A::JopLn)\n\nConvert a linear Jets operator into its equivalent matrix.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.eltype-Tuple{Jet}","page":"Reference","title":"Base.eltype","text":"eltype(A::Union{Jet,Jop,JopAdjoint})\n\nReturn the element type of A.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.eltype-Union{Tuple{JetAbstractSpace{T,N} where N}, Tuple{T}} where T","page":"Reference","title":"Base.eltype","text":"eltype(R)\n\nReturn the element type of the space R::JetAbstractSpace.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.iszero-Union{Tuple{Jet{D,R,typeof(Jets.JopZeroBlock_df!),DF,DF′,U,M,S} where S<:NamedTuple where M<:AbstractArray where U<:Function where DF′<:Function where DF<:Function}, Tuple{R}, Tuple{D}} where R<:JetAbstractSpace where D<:JetAbstractSpace","page":"Reference","title":"Base.iszero","text":"iszero(A::Union{Jet, Jop})\n\nReturn true if A was constructed via JopZeroBlock.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.length-Tuple{JetAbstractSpace}","page":"Reference","title":"Base.length","text":"length(R)\n\nReturn the dimension the space R::JetAbstractSpace\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.ones","page":"Reference","title":"Base.ones","text":"ones(R)\n\nConstruct an array of the type and size defined by R::JetAbstractSpace{T} and filled with one(T).\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.rand","page":"Reference","title":"Base.rand","text":"rand(R)\n\nConstruct an array of the type and size defined by the R::JetAbstractSpace, and filled with random values.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.range-Tuple{Jet}","page":"Reference","title":"Base.range","text":"R = range(A)\n\nReturn R::JetAbstractSpace, which is the range of A::Union{Jet, Jop, AbstractMatrix}.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.reshape-Tuple{AbstractArray,JetAbstractSpace}","page":"Reference","title":"Base.reshape","text":"reshape(x, R)\n\nReturns an array that is consistent with the shape of the space R::JetAbstractSpace, and shares memory with x.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.size-Tuple{JetAbstractSpace,Any}","page":"Reference","title":"Base.size","text":"size(R[,i])\n\nReturn the shape of the array associated to the Jet space R::JetAbstractSpace. If i is specifid, then returns the length along the ith array dimension.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.size-Tuple{Union{Jet, Jop},Any}","page":"Reference","title":"Base.size","text":"size(A[, i])\n\nReturn the size of the range and domain of A::Union{Jet,Jop}.  With no arguments, return (length(range(A)), length(domain(A))).  With i specified, return length(range(A)) for i = 1 and return length(domain(A)) otherwise.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.vec-Tuple{Jop}","page":"Reference","title":"Base.vec","text":"B = vec(A)\n\nB is equivelent to A except that its domain and range are \"vectorized\".  This is useful when calling algorithms that expect vectors in the domain and range of the operator.  One example of this is the lsqr method in the IterativeSolvers package.\n\nExample\n\nusing Jets, JetPack, IterativeSolvers\n\nA = JopDiagonal(rand(10,11))\nd = rand(range(A))\nm = lsqr(vec(A), vec(d))\n\n\n\n\n\n","category":"method"},{"location":"reference/#Base.zeros","page":"Reference","title":"Base.zeros","text":"zeros(R)\n\nConstruct an array of the type and size defined by R::JetAbstractSpace{T} and filled with zero(T).\n\n\n\n\n\n","category":"function"},{"location":"reference/#Jets.JopZeroBlock-Tuple{JetAbstractSpace,JetAbstractSpace}","page":"Reference","title":"Jets.JopZeroBlock","text":"JopZeroBlock(dom, rng)\n\nConstruct a Jets operator that is equivalent to a matrix of zeros, and that maps from dom::JetAbstractSpace to rng::JetAbstractSpace.  This can be useful when forming block operators that contain zero blocks.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.domain-Tuple{Jet}","page":"Reference","title":"Jets.domain","text":"R = domain(A)\n\nReturn R::JetAbstractSpace, which is the domain of A::Union{Jet, Jop, AbstractMatrix}.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.dot_product_test-Tuple{JopLn,AbstractArray,AbstractArray}","page":"Reference","title":"Jets.dot_product_test","text":"lhs,rhs = dot_product_test(A, m, d; mmask, dmask)\n\nCompute and return the left and right hand sides of the dot product test:\n\n<d,Am> ≈ <Aᴴd,m>\n\nHere Aᴴ is the conjugate transpose or adjoint of A, and <x, y> denotes the inner product of vectors x and y. The left and right hand sides of the dot product test are expected to be equivalent close to machine precision for operator A. If the equality does not hold this can indicate a problem with the implementation of the operator A.\n\nThis function provides the optional named arguments mmask and dmask which are vectors in the domain and range of A that are applied via elementwise multiplication to mask the vectors m and d before applying of the operator, as shown below. Here we use ∘ to represent the Hadamard product (elementwise multiplication) of two vectors.\n\n<dmask ∘ d, A (mmask ∘ m)> ≈ <Aᵀ (dmask ∘ d), mmask ∘ m>\n\nYou can test the relative accuracy of the operator with this relation for the left hand side lhs and right hand side rhs returned by this function: \n\n|lhs - rhs| / |lhs + rhs| < ϵ\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.getblock-Union{Tuple{R}, Tuple{D}, Tuple{Jet{D,R,typeof(Jets.JetBlock_f!),DF,DF′,U,M,S} where S<:NamedTuple where M<:AbstractArray where U<:Function where DF′<:Function where DF<:Function,Any,Any}} where R where D","page":"Reference","title":"Jets.getblock","text":"getblock(A, i, j)\n\nReturn the block of the Jets block operator A that corresponds to row block i and column block j.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.indices-Tuple{JetBSpace,Integer}","page":"Reference","title":"Jets.indices","text":"indices(R, iblock)\n\nReturn the linear indices associated with block iblock in the Jets block space R::JetBSpace.\n\nExample\n\nConsider a block operator with 2 row-blocks and 3 column-blocks.  We can use indices to determine the elements of the vector that are associatd with the first block of its domain:\n\nusing Pkg\npkg\"add Jets JetPack\"\nusing Jets, JetPack\nA = @blockop [JopDiagonal(rand(10)) for irow=1:2, icol=1:3]\nindices(domain(A), 1) # returns indices 1:10\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.isblockop-Tuple{Jop{var\"#s22\"} where var\"#s22\"<:(Jet{var\"#s21\",var\"#s20\",typeof(Jets.JetBlock_f!),DF,DF′,U,M,S} where S<:NamedTuple where M<:AbstractArray where U<:Function where DF′<:Function where DF<:Function where var\"#s20\"<:JetAbstractSpace where var\"#s21\"<:JetAbstractSpace)}","page":"Reference","title":"Jets.isblockop","text":"isblockop(A)\n\nReturn true if A is a Jets block operator.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.jacobian!-Tuple{Jet,AbstractArray}","page":"Reference","title":"Jets.jacobian!","text":"jacobian!(F, m₀)\n\nReturn the jacobian of F::Union{Jet, Jop, AbstractMatrix} at the linearization point m₀. The jacobian shares the underlying Jet with F. This means that if the jacobian may mutate F.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.jacobian-Tuple{Union{Jet, Jop},AbstractArray}","page":"Reference","title":"Jets.jacobian","text":"jacobian(F, m₀)\n\nReturn the jacobian of F::Union{Jet, Jop, AbstractMatrix} at the point m₀. The linearization constructs a new underlying Jet.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.jet-Tuple{Jop}","page":"Reference","title":"Jets.jet","text":"jet(A)\n\nReturn the Jet associated with A::Union{Jop, JopAdjoint}.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.linearity_test","page":"Reference","title":"Jets.linearity_test","text":"lhs,rhs = linearity_test(A::Jop)\n\ntest the the linear Jet operator A satisfies the following test for linearity: \n\nA(m_1+m_2)=Am_1 + A_m2\n\n\n\n\n\n","category":"function"},{"location":"reference/#Jets.linearization_test-Tuple{JopNl,AbstractArray}","page":"Reference","title":"Jets.linearization_test","text":"μobs, μexp = linearization_test(F, mₒ; μ)\n\nThest that the jacobian, J, of F satisfies the Taylor expansion:\n\nF(m) = F(m_o) + F'(m_o)δm + O(δm^2)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.nblocks-Tuple{JetBSpace}","page":"Reference","title":"Jets.nblocks","text":"nblocks(R)\n\nReturn the number of blocks in the Jets block space R::JetBSpace.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.nblocks-Tuple{Jet}","page":"Reference","title":"Jets.nblocks","text":"nblocks(A[, i])\n\nReturn the number of blocks in the range and domain of the Jets block operator A::Union{Jet, Jop}. With i specified, return nblocks(range(jet)) for i = 1 and return nblocks(domain(jet)) otherwise.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.perfstat-Union{Tuple{T}, Tuple{F}, Tuple{R}, Tuple{D}} where T<:(Jet{D,R,F,DF,DF′,U,M,S} where S<:NamedTuple where M<:AbstractArray where U<:Function where DF′<:Function where DF<:Function) where F<:Function where R where D","page":"Reference","title":"Jets.perfstat","text":"perfstat(A)\n\nReturn a Dictionary with performance information for A::Union{Jet,Jop,JopAdjoint}. the perfstat(jet::Jet) method that can be implemented by the author of an operator to track performance metrics.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.point!-Tuple{Jet,AbstractArray}","page":"Reference","title":"Jets.point!","text":"point!(F, mₒ)\n\nUpdate the linearization point (model vector) for F::Union{Jet, JopLn, JopAdjoint} to model vector mₒ.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.point-Tuple{Jet}","page":"Reference","title":"Jets.point","text":"point(F)\n\nReturn the linearization point (model vector) mₒ associated with F::Union{Jet, JopLn, JopAdjoint}.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.shape-Tuple{Union{Jet, Jop}}","page":"Reference","title":"Jets.shape","text":"shape(A[, i])\n\nReturn the shape of the range and domain of A::Union{Jet, Jop, AbstractMatrix}. With no arguments, return (size(range(A)), size(domain(A))).  With i specified, return size(range(A)) for i = 1 and return size(domain(A)) otherwise.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.space-Tuple{JetBSpace,Integer}","page":"Reference","title":"Jets.space","text":"space(R, iblock)\n\nReturn the Jets sub-space associated with block iblock in the Jets block space R::JetBSpace.\n\nExample\n\nConsider a block operator with 2 row-blocks and 3 column-blocks.  We can use space to determine the sub-space associated with the first block of its domain:\n\nusing Pkg\npkg\"add Jets JetPack\"\nusing Jets, JetPack\nA = @blockop [JopDiagonal(rand(10)) for irow=1:2, icol=1:3]\nspace(domain(A), 1) # JetSpace(Float64,10)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.state!-Tuple{Any,Any}","page":"Reference","title":"Jets.state!","text":"state!(A::Union{Jet,Jop,JopAdjoint}, s)\n\nUpdates and merges the state of the A with s.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.state-Tuple{Jet}","page":"Reference","title":"Jets.state","text":"state(A::Union{Jet,Jop,JopAdjoint}[, key])\n\nIf key::Symbol is specified, then return the state corresponding to key. Otherwise, return the state of A as a NamedTuple.\n\n\n\n\n\n","category":"method"},{"location":"reference/#LinearAlgebra.mul!-Tuple{AbstractArray,JopNl,AbstractArray}","page":"Reference","title":"LinearAlgebra.mul!","text":"mul!(d, F, m)\n\nIn place version of d=F*m where F is a Jets linear (e.g. JopLn) or nonlinear (JopNl) operator.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Random.randperm-Tuple{JetAbstractSpace,Int64}","page":"Reference","title":"Random.randperm","text":"randperm(R)\n\nConstruct a list of random linear indices over the dimensions of R::JetAbstractSpace.  The list is useful for selecting a random subset of a multi-dimensional image.\n\nExample\n\nusing Jets\nR = JetSpace(Float64, 10, 2)\nx = rand(R)\ny = x[randperm(R)[1:10]] # get 10 elements at random from x\n\n\n\n\n\n","category":"method"},{"location":"reference/#Core.Array","page":"Reference","title":"Core.Array","text":"Array(R)\n\nConstruct an uninitialized array of the type and size defined by R::JetsAbstractSpace.\n\n\n\n\n\n","category":"type"},{"location":"reference/#Jets.Jet-Tuple{}","page":"Reference","title":"Jets.Jet","text":"Jet(;dom, rng, f!, df!, df′!, upstate!, s)\n\nReturn a Jet with domain dom::JetAbstractSpace, range rng::JetSAbstractpace, with forward mapping  f!::Function, linearized forward mapping df!::Function, linearized adjoint mapping df′!::Function, Jacobian state modification function upstate!::Function, and state s::NamedTuple.\n\nA jet describes a function f! and its linearization (forward df!, and adjointdf′!``) about a point.\n\nIf one of f! or df! is specified, and df′! is not, then we assume that f!=df!=df′!. This means that the operator is linear and self-adjoint.\n\nIf f! and df! are sepecified, bug df′! is not, then we assume that df′!=df!.  This means that the operator is nonlinear and self-adjoint.\n\nExample\n\nConsider a nonlinear mapping with a self-adjoint linearization f(x)=x^2\n\nusing Jets\ng!(m) = m.^2\ndg!(δm; mₒ) = @. 2*mₒ*δm\njet = Jet(;dom=JetSpace(Float64,2), rng=JetSpace(Float64,2), f! = g!, df! = dg!)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.JetSSpace-Union{Tuple{F}, Tuple{N}, Tuple{T}, Tuple{Type{T},Tuple{Vararg{Int64,N}},Tuple{Vararg{Int64,N}},F}} where F where N where T","page":"Reference","title":"Jets.JetSSpace","text":"JetSSpace(_T, n, M, map::F)\n\nConstruct and return a symmetric space JetSSpace.\n\nparameters\n\n_T is the type, usually Complex{Float32} or Complex{Float64}.\nn is a tuple that defines the dimensionality of the space.\nM is a tuple that defines which dimensions are symmetric. Note that currently only a single symmetric dimension is supported by the API.\nF is a function that maps indices for the symmetric dimension, described below.\n\nAn example requiring a JetSSpace is the Fourier transform: the Fourier transform of a real vector is in a complex space with Hermittian symmetry. Only the positive frequencies are needed, and the spectrum at negative frequencies is the Hermittian conjugate of the spectrum at the corresponding positive frequencies: S(-f) = conj(S(f). For this example the map F is a function that returns the multi-dimensional index of f when given the multi-dimensional index of -f.\n\nSee also: JopFft in the JetPackTransforms package.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.JetSpace-Union{Tuple{N}, Tuple{T}, Tuple{Type{T},Vararg{Int64,N}}} where N where T","page":"Reference","title":"Jets.JetSpace","text":"JetSpace(T, n)\n\nConstruct and return a JetSpace of type T and size n\n\nExamples\n\nCreate a 100 dimension space with array elelment type Float64 and array size (100,)\n\nR1 = JetSpace(Float64, 100)\n\nCreate a 100 dimension space with array element type Float32 and array size (5, 20)\n\nR2 = JetSpace(Float32, 5, 20)\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.JopLn-Tuple{}","page":"Reference","title":"Jets.JopLn","text":"JopLn(; kwargs ...)\n\nConstruct a JopLn with Jet constructed from keyword arguments kwargs. This is equivalent to JopLn(Jet(;kwargs...)).  Please see Jet for more information.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Jets.JopNl-Tuple{}","page":"Reference","title":"Jets.JopNl","text":"JopNl(; kwargs ...)\n\nConstruct a JopNl with Jet constructed from keyword arguments kwargs. This is equivalent to JopNl(Jet(;kwargs...)).  Please see Jet for more information.\n\n\n\n\n\n","category":"method"},{"location":"reference/#Index","page":"Reference","title":"Index","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"","category":"page"},{"location":"#Jets","page":"Jets","title":"Jets","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Jets is a Julia library for matrix-free linear algebra and nonlinear optimization.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Other Julia packages that provide similar functionality include:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"LinearMaps - https://github.com/Jutho/LinearMaps.jl\nFunctionalOperators - https://github.com/hakkelt/FunctionOperators.jl\nAbstractOperators - https://github.com/kul-forbes/AbstractOperators.jl\nJOLI - https://github.com/slimgroup/JOLI.jl\nBlockArrays - https://github.com/JuliaArrays/BlockArrays.jl ","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"The purpose of Jets is to provide familiar matrix-vector syntax without forming matrices. Instead, the action of the matrix and its adjoint applied to vectors is specified using Julia methods. In addition, Jets provides a framework for nonlinear functions and their linearization. The main construct in this package is a jet and is loosely based on its mathematical namesake (https://en.wikipedia.org/wiki/Jet_(mathematics)). In particular,  a jet describes a function and its linearization at some point in its domain.","category":"page"},{"location":"#Companion-packages-in-the-COFII-framework","page":"Jets","title":"Companion packages in the COFII framework","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"DistributedJets - https://github.com/ChevronETC/DistributedJets.jl\nJetPack - https://github.com/ChevronETC/JetPack.jl\nJetPackDSP - https://github.com/ChevronETC/JetPackDSP.jl\nJetPackWaveFD - https://github.com/ChevronETC/JetPackWaveFD.jl\nJetPackTransforms - https://github.com/ChevronETC/JetPackTransforms.jl","category":"page"},{"location":"#Vector-spaces","page":"Jets","title":"Vector spaces","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"The domain and range of a jet are vector spaces. In Jets, a vector space is represented by one of three concrete types:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"JetSpace <: JetAbstractSpace\nJetSSpace <: JetAbstractSpace\nJetBSpace <: JetAbstractSpace","category":"page"},{"location":"#JetSpace","page":"Jets","title":"JetSpace","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"JetSpace is an n-dimensional vector space with additional meta-data. The addition meta-data is:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"a size (n₁,n₂,...,nₚ) where prod(n₁,n₂,...,nₚ)=n\na type such as Float32, Complex{Float64}, etc.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Examples","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"R₁ = JetSpace(Float32, 10)           # 10 dimensional space using single precision floats\nR₂ = JetSpace(Float64, 10, 20)       # 200 dimensional space with array size 10×20 using double precision floats\nR₃ = JetSpace(ComplexF32, 10, 20, 2) # 400 dimensional space with array size 10×20×2 using single precision floats","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"The choice of shape and type will have various consequences. For example, using the rand convenience function to construct vectors within the space will have the following effects:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"x₁ = rand(R₁) # x₁ will be a 1 dimensional array of length 10 and type Float32\nx₂ = rand(R₂) # x₂ will be a 2 dimensional array of size (10,20) and type Float64\nx₃ = rand(R₃) # x₃ will be a 3 dimensional array of size (10,20,2) and type ComplexF32","category":"page"},{"location":"#JetSSpace","page":"Jets","title":"JetSSpace","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"There are jets that lead to symmetries in their domain/range, and those symmetries can be used for increased computational efficiency. For example, the Fourier transform of a real vector has Hermitian symmetry for negative frequencies. JetSSpace is used to construct an array that includes extra information about these symmetries. In general, jets that have symmetric spaces should provide a method symspace for the construction of its symmetric space. ","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Example","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Pkg\nPkg.add(\"Jets\",\"JetPackFft\")\nA = JopFft(JetSpace(Float64,128))\nR = range(A) # the range of A is a symmetric space R<:JetSSpace","category":"page"},{"location":"#JetBSpace","page":"Jets","title":"JetBSpace","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Jets provides a block jet that is analogous to a block matrix. The domain and range associated with a block jet is a JetBSpace, and a JetBSpace adds book-keeping information to describe this blocked structure. For more information, please see the block jet documentation, below.","category":"page"},{"location":"#Convenience-methods-for-Jet-vector-spaces","page":"Jets","title":"Convenience methods for Jet vector spaces","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Jets provides the following convenience methods for all concrete Jet Vector spaces R::JetAbstractSpace:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"eltype(R)     # element type of R\nndims(R)      # number of dimensions of arrays in `R`\nlength(R)     # length of arrays in `R` and is equivalent to `prod(size(R))`\nsize(R)       # size of arrays in `R`\nreshape(x, R) # reshape `x::AbstractArray` to the size of `R`\nones(R)       # array of ones with the element-type and size of `R`\nrand(R)       # random array with the element-type and size of `R`\nzeros(R)      # zero array with the element-type and size of `R`\nArray(R)      # uninitialized array with the element-type and size of `R`\nvec(R)        # return a similar space, but backed by a one dimensional array","category":"page"},{"location":"#Jets-2","page":"Jets","title":"Jets","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"A jet jet::Jet is the main construct in this package. It can be used on its own; but is more often wrapped in a linear or nonlinear operator which will be discussed shortly. We associate the following methods with jet::Jet:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"f!(d, jet, m; kwargs...)   # function map from domain to range\ndf!(d, jet, m; kwargs...)  # linearized function map from domain to range\ndf′!(m, jet, d; kwargs...) # linearized adjoint function map from range to domain\ndomain(jet)                # domain of jet\nrange(jet)                 # range of jet\neltype(jet)                # element-type of the jet\nshape(jet)                 # shape of the domain and range of jet\nshape(jet, i)              # shape of the range (i=1) or domain (i=2) of jet\nsize(jet)                  # size of the domain and range of jet\nsize(jet,i)                # size of the range (i=1) or domain (i=2) of jet\nstate(jet)                 # named tuple containing state information of jet\nstate!(jet, s)             # update the state information of jet via the named tuple, s\npoint(jet)                 # get the point that the linearization is about\npoint!(jet, mₒ)            # set the point that the linearization is about\nclose(jet)                 # closing a jet makes an explicit call to its finalizers","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Note that the f!, df! and df′! methods are not exported.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Example, creating a jet for the function f(x)=x^a","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Pkg\nPkg.add(\"Jets\")\nfoo!(d, m; a, kwargs...) = d .= x.^a\ndfoo!(δd, δm; mₒ, a, kwargs...) = δd .= a * mₒ.^(a-1) .* δm\njet = Jet(dom = JetSpace(Float64,128), rng = \n    JetSpace(Float64,128), f! = foo!, df! = dfoo!, s = (a=1.0,))","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"In the above construction, we define the domain (dom), range (rng), and a function (f!) with its linearization (df!). In addition, the jet contains state. In this case the state is the value of the exponent a. The state is passed to the jet using the named tuple s = (a=1.0,). Notice that construction of the jet uses Julia's named arguments. ","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Finally, we note that for this specific example, the construction does not specify the adjoint of the lineariziation. This is because for this specific case the linearization is self-adjoint. An equivalent construction that explicitly includes the adjoint is:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"jet = Jet(dom = JetSpace(Float64,128), rng = \n    JetSpace(Float64,128), f! = foo!, df! = dfoo!, df′! = dfoo!, s=(a=1.0,))","category":"page"},{"location":"#Linear-and-nonlinear-operators","page":"Jets","title":"Linear and nonlinear operators","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"A jet can be wrapped into nonlinear (JopNl) and linear (JopLn) operators. When we wrap a nonlinear operator around a jet, we must also specify the point at which we linearize. Continuing from the jet defined in the previous section, we first show a linear operator and then a nonlinear operator.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Example: linear operator","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"A = JopLn(jet, rand(domain(A))  # A is a linear operator linearized about a random point in domain(A)\nm = rand(domain(A))             # m is a vector in domain(A)\nd = A*m                         # d is a vector in range(A), computed via the dfoo! method\nmul!(d, A, m)                   # equivalent in-place version of the previous line\na = A'*d                        # a is a vector in domain(A), computed via dfoo! (A is self-adjoint)\nmul!(a, A', d)                  # equivalent in-place version of the previous line","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Example: nonlinear operator","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"F = JopNl(jet)                  # F is a nonlinear operator\nm = rand(domain(A))             # m is a vector in domain(A)\nd = F*m                         # d is a vector in range(A), computed via the foo! method\nmul!(d, F, m)                   # equivalent in-place version of the prvious line\nA = jacobian(F, rand(domain(A)) # A is the Jacobian of F, a linear operator","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"In addition, same methods that were applied to a jet can be applied to Jets operators: domain, range, eltype, shape, size, state, state!, close. Finally, note that given a linear operator, we can recover the corresponding matrix.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Jets, JetPackTransforms\nA = JopFft(JetSpace(Float64,5))\nB = convert(Array, A)","category":"page"},{"location":"#Operator-compositions","page":"Jets","title":"Operator compositions","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Jot operators can be combined in various ways. In this section we consider operator compositions. Operators are composed using ∘ which can be typed into your favorite text editor using unicode. Note that editors such as emacs, vim, atom, vscode, and JupyterLab support using LaTeX. So, typing \\circ followed by TAB will produce ∘.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Example of operator compositions  ","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Pkg\nPkg.add(\"Jets\",\"JetPack\")\nusing Jets, JetPack\nA₁ = JopDiagonal(rand(10))\nA₂ = JopDiagonal(rand(10))\nA₃ = rand(10,10)\nA = A₃ ∘ A₂ ∘ A₁\nm = rand(domain(A))\nA * m ≈ A₃ * (A₂ * (A₁ * m)) # true","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Notice that A₃ is a Julia matrix rather than a Jet operator.","category":"page"},{"location":"#Operator-linear-combinations","page":"Jets","title":"Operator linear combinations","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Operators can be built from linear combinations of operators,","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Pkg\nPkg.add(\"Jets\",\"JetPack\")\nusing Jets, JetPack\nA₁ = JopDiagonal(rand(10))\nA₂ = JopDiagonal(rand(10))\nA₃ = rand(10,10)\nA = 1.0*A₁ - 2.0*A₂ + 3.0*A₃\nm = rand(domain(A))\nA*m ≈ 1.0*(A₁*m) - 2.0*(A₂*m) + 3.0*(A₃*m) # true","category":"page"},{"location":"#Block-operators,-block-spaces-and-block-vectors","page":"Jets","title":"Block operators, block spaces and block vectors","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"Jet operators can be combined into block operators which are exactly analogous to block matrices. The domain and ranges of a block operator are of type JetBSpace and such that vectors in that space are block vectors of type BlockArray. In order to construct a block operator, we use the @blockop macro. For example:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Pkg\nPkg.add(\"Jets\",\"JetPack\")\nusing Jets, JetPack\nA = @blockop [JopDiagonal(rand(10)) for irow=1:2, icol=1:3]","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"In the above code listing, A is a block operator with 2 row-blocks and 3 column-blocks. Given a block operator, we can query for the number of blocks as well as retrieve individual blocks:","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"A₁₂ = getblock(A, 1, 2)\nnb = nblocks(A)\nnrowblocks = nblocks(A, 1)\nncolblocks = nblocks(A, 2)","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"We can form block vectors in the domain and range of A. Moreover, once we have formed a block vector, we can access individual blocks. For example,","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"d = rand(range(A))\nm = rand(domain(A))\n\nnblocks(d)\nnblocks(m)\n\nd₂ = getblock(d, 2) # this is not a copy, it is a reference to the second block of d\nm₁ = getblock(m, 1)\n\nsetblock!(d, 2, rand(size(d₂)))","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"We can reshape Julia Array's into block arrays. For example,","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"_d = rand(eltype(range(A)), size(range(A)))\nd = reshape(_d, range(A))","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Since BlockArrays extend Julia's AbstractArray and broadcasting interfaces, most of the functionality of a Julia Array is also available for BlockArray's.","category":"page"},{"location":"#Vectorized-operators","page":"Jets","title":"Vectorized operators","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"There are libraries that assume that the vectors in the model and data space are backed by one dimensional arrays.  To help with this, Jets provides a vec method that returns an operator with one dimensional arrays backing the domain and range.  As an example, we show how to compose Jets with the lsqr method in the IterativeSolvers package.","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"using Jets, JetPack, IterativeSolvers\n\nA = JopDct(Float64, 128, 64)\nd = rand(range(A))\nm = reshape(lsqr(vec(A), vec(d)), range(A))\nA*m ≈ d # true","category":"page"},{"location":"","page":"Jets","title":"Jets","text":"Note that for the case that the domain and range are already backed by one dimensional arrays, vec is a no-op.  Further, note that a block array is a one dimensional array.  ","category":"page"},{"location":"#Creating-a-new-Jet-(Developers)","page":"Jets","title":"Creating a new Jet (Developers)","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"To build a new jet, provide the function that maps from the domain to the range, its linearization and a default state. We will show three examples: 1) linear operator, 2) self-adjoint linear operator, 3) nonlinear operator.","category":"page"},{"location":"#Linear-operator","page":"Jets","title":"Linear operator","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"using Jets\nMyLinearJet_df!(d, m; A, kwargs...) = mul!(d,A,m)\nMyLinearJet_df′!(m, d; A, kwargs...) = mul!(m,A',d)\nfunction MyLinearJet()\n    JopLn(dom = JetSpace(Float64,2), rng = JetSpace(Float64,2), \n        df! = MyLinearJet_df!, df′! = MyLinearJet_df′!, s=(A=rand(2,2),))\nend","category":"page"},{"location":"#Self-adjoint-linear-operator","page":"Jets","title":"Self-adjoint linear operator","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"using Jets\nMySelfAdjointJet_df!(d, m; A, kwargs...) = mul!(d,A,m)\nfunction MySelfAdjointJet()\n    B = rand(2,2)\n    JopLn(dom = JetSpace(Float64,2), rng = JetSpace(Float64,2), \n        df! = MySelfAdjointJet_df!, s = (A=B'*B,))\nend","category":"page"},{"location":"#Nonlinear-operator","page":"Jets","title":"Nonlinear operator","text":"","category":"section"},{"location":"","page":"Jets","title":"Jets","text":"using Jets\nMyNonLinearJet_f!(d, m; a, kwargs...) = d .= x.^a\nMyNonLinearJet_df!(d, m; mₒ, a, kwargs...) = d . = a * mₒ.^(a-1) .* m\nfunction MyNonLinearJet()\n    JopNl(dom = JetSpace(Float64,2), rng = JetSpace(Float64,2), \n        f! = MyNonLinearJet_f!, df! = MyNonLinearJet_df!, s = (a=2.0,))\nend","category":"page"}]
}
