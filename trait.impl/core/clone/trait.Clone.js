(function() {var implementors = {
"halo2_proofs":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Challenge.html\" title=\"struct halo2_proofs::plonk::Challenge\">Challenge</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.LagrangeCoeff.html\" title=\"struct halo2_proofs::poly::LagrangeCoeff\">LagrangeCoeff</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.ProvingKey.html\" title=\"struct halo2_proofs::plonk::ProvingKey\">ProvingKey</a>&lt;C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl&lt;'com, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/poly/commitment/trait.MSM.html\" title=\"trait halo2_proofs::poly::commitment::MSM\">MSM</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.VerifierQuery.html\" title=\"struct halo2_proofs::poly::VerifierQuery\">VerifierQuery</a>&lt;'com, C, M&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/permutation/struct.Assembly.html\" title=\"struct halo2_proofs::plonk::permutation::Assembly\">Assembly</a>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/msm/struct.MSMKZG.html\" title=\"struct halo2_proofs::poly::kzg::msm::MSMKZG\">MSMKZG</a>&lt;E&gt;<div class=\"where\">where\n    E::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    E::G1: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl&lt;'params, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/ipa/msm/struct.MSMIPA.html\" title=\"struct halo2_proofs::poly::ipa::msm::MSMIPA\">MSMIPA</a>&lt;'params, C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    C::<a class=\"associatedtype\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html#associatedtype.Base\" title=\"type halo2_proofs::arithmetic::CurveAffine::Base\">Base</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Column.html\" title=\"struct halo2_proofs::dev::metadata::Column\">Column</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Selector.html\" title=\"struct halo2_proofs::plonk::Selector\">Selector</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.RegionStart.html\" title=\"struct halo2_proofs::circuit::RegionStart\">RegionStart</a>"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/transcript/trait.EncodedChallenge.html\" title=\"trait halo2_proofs::transcript::EncodedChallenge\">EncodedChallenge</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Blake2bRead.html\" title=\"struct halo2_proofs::transcript::Blake2bRead\">Blake2bRead</a>&lt;R, C, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Gate.html\" title=\"struct halo2_proofs::dev::metadata::Gate\">Gate</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Assigned.html\" title=\"enum halo2_proofs::plonk::Assigned\">Assigned</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Fixed.html\" title=\"struct halo2_proofs::plonk::Fixed\">Fixed</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.RegionIndex.html\" title=\"struct halo2_proofs::circuit::RegionIndex\">RegionIndex</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/dev/enum.CellValue.html\" title=\"enum halo2_proofs::dev::CellValue\">CellValue</a>&lt;F&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/permutation/struct.VerifyingKey.html\" title=\"struct halo2_proofs::plonk::permutation::VerifyingKey\">VerifyingKey</a>&lt;C&gt;"],["impl&lt;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.AssignedCell.html\" title=\"struct halo2_proofs::circuit::AssignedCell\">AssignedCell</a>&lt;V, F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Expression.html\" title=\"enum halo2_proofs::plonk::Expression\">Expression</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.ExtendedLagrangeCoeff.html\" title=\"struct halo2_proofs::poly::ExtendedLagrangeCoeff\">ExtendedLagrangeCoeff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.InstanceQuery.html\" title=\"struct halo2_proofs::plonk::InstanceQuery\">InstanceQuery</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Advice.html\" title=\"struct halo2_proofs::plonk::Advice\">Advice</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Polynomial.html\" title=\"struct halo2_proofs::poly::Polynomial\">Polynomial</a>&lt;F, B&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/dev/enum.FailureLocation.html\" title=\"enum halo2_proofs::dev::FailureLocation\">FailureLocation</a>"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/transcript/trait.EncodedChallenge.html\" title=\"trait halo2_proofs::transcript::EncodedChallenge\">EncodedChallenge</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Keccak256Write.html\" title=\"struct halo2_proofs::transcript::Keccak256Write\">Keccak256Write</a>&lt;W, C, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Region.html\" title=\"struct halo2_proofs::dev::metadata::Region\">Region</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/plonk/enum.Any.html\" title=\"enum halo2_proofs::plonk::Any\">Any</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.VirtualCell.html\" title=\"struct halo2_proofs::plonk::VirtualCell\">VirtualCell</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/ipa/strategy/struct.Accumulator.html\" title=\"struct halo2_proofs::poly::ipa::strategy::Accumulator\">Accumulator</a>&lt;C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.TableColumn.html\" title=\"struct halo2_proofs::plonk::TableColumn\">TableColumn</a>"],["impl&lt;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/transcript/trait.EncodedChallenge.html\" title=\"trait halo2_proofs::transcript::EncodedChallenge\">EncodedChallenge</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Blake2bWrite.html\" title=\"struct halo2_proofs::transcript::Blake2bWrite\">Blake2bWrite</a>&lt;W, C, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/permutation/struct.Argument.html\" title=\"struct halo2_proofs::plonk::permutation::Argument\">Argument</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.ChallengeScalar.html\" title=\"struct halo2_proofs::transcript::ChallengeScalar\">ChallengeScalar</a>&lt;C, T&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/layouter/struct.RegionShape.html\" title=\"struct halo2_proofs::circuit::layouter::RegionShape\">RegionShape</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/enum.SerdeFormat.html\" title=\"enum halo2_proofs::SerdeFormat\">SerdeFormat</a>"],["impl&lt;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.Value.html\" title=\"struct halo2_proofs::circuit::Value\">Value</a>&lt;V&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.VerifyingKey.html\" title=\"struct halo2_proofs::plonk::VerifyingKey\">VerifyingKey</a>&lt;C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/circuit/struct.Cell.html\" title=\"struct halo2_proofs::circuit::Cell\">Cell</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Gate.html\" title=\"struct halo2_proofs::plonk::Gate\">Gate</a>&lt;F&gt;"],["impl&lt;'params, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/ipa/strategy/struct.GuardIPA.html\" title=\"struct halo2_proofs::poly::ipa::strategy::GuardIPA\">GuardIPA</a>&lt;'params, C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl&lt;'params, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/strategy/struct.AccumulatorStrategy.html\" title=\"struct halo2_proofs::poly::kzg::strategy::AccumulatorStrategy\">AccumulatorStrategy</a>&lt;'params, E&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/transcript/trait.EncodedChallenge.html\" title=\"trait halo2_proofs::transcript::EncodedChallenge\">EncodedChallenge</a>&lt;C&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Keccak256Read.html\" title=\"struct halo2_proofs::transcript::Keccak256Read\">Keccak256Read</a>&lt;R, C, E&gt;"],["impl&lt;'com, C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.ProverQuery.html\" title=\"struct halo2_proofs::poly::ProverQuery\">ProverQuery</a>&lt;'com, C&gt;<div class=\"where\">where\n    C::Scalar: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.ConstraintSystem.html\" title=\"struct halo2_proofs::plonk::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.AdviceQuery.html\" title=\"struct halo2_proofs::plonk::AdviceQuery\">AdviceQuery</a>"],["impl&lt;'params, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/strategy/struct.SingleStrategy.html\" title=\"struct halo2_proofs::poly::kzg::strategy::SingleStrategy\">SingleStrategy</a>&lt;'params, E&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/ipa/commitment/struct.ParamsIPA.html\" title=\"struct halo2_proofs::poly::ipa::commitment::ParamsIPA\">ParamsIPA</a>&lt;C&gt;"],["impl&lt;'a, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/msm/struct.DualMSM.html\" title=\"struct halo2_proofs::poly::kzg::msm::DualMSM\">DualMSM</a>&lt;'a, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.FixedQuery.html\" title=\"struct halo2_proofs::plonk::FixedQuery\">FixedQuery</a>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.CurveAffine.html\" title=\"trait halo2_proofs::arithmetic::CurveAffine\">CurveAffine</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/transcript/struct.Challenge255.html\" title=\"struct halo2_proofs::transcript::Challenge255\">Challenge255</a>&lt;C&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/dev/metadata/struct.Constraint.html\" title=\"struct halo2_proofs::dev::metadata::Constraint\">Constraint</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/commitment/struct.Blind.html\" title=\"struct halo2_proofs::poly::commitment::Blind\">Blind</a>&lt;F&gt;"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/arithmetic/trait.Field.html\" title=\"trait halo2_proofs::arithmetic::Field\">Field</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.EvaluationDomain.html\" title=\"struct halo2_proofs::poly::EvaluationDomain\">EvaluationDomain</a>&lt;F&gt;"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"halo2_proofs/plonk/trait.ColumnType.html\" title=\"trait halo2_proofs::plonk::ColumnType\">ColumnType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Column.html\" title=\"struct halo2_proofs::plonk::Column\">Column</a>&lt;C&gt;"],["impl&lt;'params, E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + MultiMillerLoop + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/strategy/struct.GuardKZG.html\" title=\"struct halo2_proofs::poly::kzg::strategy::GuardKZG\">GuardKZG</a>&lt;'params, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Rotation.html\" title=\"struct halo2_proofs::poly::Rotation\">Rotation</a>"],["impl&lt;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Engine&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/kzg/commitment/struct.ParamsKZG.html\" title=\"struct halo2_proofs::poly::kzg::commitment::ParamsKZG\">ParamsKZG</a>&lt;E&gt;<div class=\"where\">where\n    E::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    E::G2Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/poly/struct.Coeff.html\" title=\"struct halo2_proofs::poly::Coeff\">Coeff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"halo2_proofs/circuit/layouter/enum.RegionColumn.html\" title=\"enum halo2_proofs::circuit::layouter::RegionColumn\">RegionColumn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"halo2_proofs/plonk/struct.Instance.html\" title=\"struct halo2_proofs::plonk::Instance\">Instance</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()